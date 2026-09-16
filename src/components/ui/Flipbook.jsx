import React, { useState, useEffect } from 'react';

export default function Flipbook({ pages }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const nextPage = (e) => {
    e.stopPropagation();
    if (currentPage < pages.length - 1) setCurrentPage(prev => prev + 1);
  };

  const prevPage = (e) => {
    e.stopPropagation();
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto flex items-center justify-center mt-10 overflow-visible"
      style={{ perspective: '2500px', minHeight: isDesktop ? '600px' : '950px' }}
    >
      <div 
        className="relative w-full max-w-[340px] md:max-w-[420px] h-[450px] md:h-[550px]"
      >
        {pages.map((page, index) => {
          const isFlipped = index < currentPage;
          const isCurrent = index === currentPage;
          const zIndex = isFlipped ? index : pages.length - index;

          return (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out cursor-pointer rounded-2xl shadow-xl hover:shadow-2xl"
              style={{ 
                zIndex,
                transformStyle: 'preserve-3d',
                transformOrigin: isDesktop ? 'left center' : 'center top',
                transform: isFlipped 
                  ? (isDesktop ? 'rotateY(-180deg)' : 'rotateX(180deg)') 
                  : 'rotateY(0deg) rotateX(0deg)'
              }}
              onClick={(e) => {
                if (isCurrent) nextPage(e);
                else if (isFlipped && index === currentPage - 1) prevPage(e);
              }}
            >
              {/* Front of Page */}
              <div 
                className="absolute inset-0 w-full h-full flex flex-col bg-white overflow-hidden"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  WebkitBackfaceVisibility: 'hidden',
                  borderRadius: isDesktop ? '0 1rem 1rem 0' : '0 0 1rem 1rem',
                  borderLeft: isDesktop ? '1px solid #e5e7eb' : 'none',
                  borderTop: !isDesktop ? '1px solid #e5e7eb' : 'none'
                }}
              >
                {/* Book spine shadow */}
                {isDesktop ? (
                  <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black/10 to-transparent z-10 pointer-events-none" />
                ) : (
                  <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/10 to-transparent z-10 pointer-events-none" />
                )}
                
                <div className="w-full h-full p-4 md:p-8 relative z-0 flex flex-col justify-center items-center">
                  {page.front}
                </div>
                
                {/* Visual affordance to click */}
                {isCurrent && index < pages.length - 1 && (
                  <div className="absolute bottom-4 right-6 text-sm text-[#637C50] font-medium animate-pulse flex items-center gap-2">
                    {isDesktop ? "Click to flip right \u2192" : "Click to flip down \u2193"}
                  </div>
                )}
              </div>
              
              {/* Back of Page */}
              <div 
                className="absolute inset-0 flex flex-col bg-gray-50 overflow-hidden"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  WebkitBackfaceVisibility: 'hidden',
                  transform: isDesktop ? 'rotateY(180deg)' : 'rotateX(180deg)',
                  borderRadius: isDesktop ? '1rem 0 0 1rem' : '1rem 1rem 0 0',
                  borderRight: isDesktop ? '1px solid #e5e7eb' : 'none',
                  borderBottom: !isDesktop ? '1px solid #e5e7eb' : 'none'
                }}
              >
                {/* Book spine shadow on back */}
                {isDesktop ? (
                  <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black/10 to-transparent z-10 pointer-events-none" />
                ) : (
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/10 to-transparent z-10 pointer-events-none" />
                )}
                
                <div className="w-full h-full p-4 md:p-8 relative z-0 flex flex-col justify-center items-center">
                  {page.back}
                </div>
                
                {/* Visual affordance to click back */}
                {isFlipped && index === currentPage - 1 && (
                  <div className="absolute bottom-4 left-6 text-sm text-[#637C50] font-medium animate-pulse flex items-center gap-2">
                    {isDesktop ? "\u2190 Click to flip left" : "\u2191 Click to flip up"}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
