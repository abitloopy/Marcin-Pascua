import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  { image: "/topcit.png", pdf: "/topcit-cert.pdf", starred: true },
  { image: "/cert1.png" },
  { image: "/cert2.png" },
  { image: "/cert3.png" },
  { image: "/cert4.png" },
  { image: "/cert5.png" },
  { image: "/cert6.png" },
  { image: "/cert7.png" }
];

export default function CertificatesOverview() {
  const desktopScrollRef = useRef(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileDirection, setMobileDirection] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the array several times to create a seamless infinite loop length for desktop
  const scrollItems = [...certificates, ...certificates, ...certificates, ...certificates];

  useEffect(() => {
    // Only auto-scroll on desktop screens (>= 768px)
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

    let animationFrameId;
    let lastTime = performance.now();
    let accumulatedScroll = desktopScrollRef.current ? desktopScrollRef.current.scrollLeft : 0;
    
    // Smooth, gentle scroll speed (30px per second)
    const speed = 30;

    const autoScroll = (currentTime) => {
      if (window.innerWidth < 768) {
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (desktopScrollRef.current && !isHovered && !selectedCert) {
        accumulatedScroll += speed * Math.min(delta, 0.1);
        
        const maxScroll = desktopScrollRef.current.scrollWidth - desktopScrollRef.current.clientWidth;
        if (accumulatedScroll >= maxScroll - 1) {
          accumulatedScroll = 0;
        }
        desktopScrollRef.current.scrollLeft = accumulatedScroll;
      } else if (desktopScrollRef.current) {
        accumulatedScroll = desktopScrollRef.current.scrollLeft;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, selectedCert]);

  const scrollDesktopLeft = () => {
    if (desktopScrollRef.current) {
      desktopScrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollDesktopRight = () => {
    if (desktopScrollRef.current) {
      desktopScrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const handleMobileNext = () => {
    setMobileDirection(1);
    setMobileIndex((prev) => (prev + 1) % certificates.length);
  };

  const handleMobilePrev = () => {
    setMobileDirection(-1);
    setMobileIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const mobileVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 30 : -30,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -30 : 30,
      transition: { duration: 0.2, ease: "easeIn" }
    })
  };

  return (
    <div id="certificates" className="pt-0 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 w-full overflow-hidden bg-white flex flex-col items-center justify-center font-poppins relative">
      <div className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#637C50] tracking-tight leading-tight">
          My Certifications
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed mt-2.5 sm:mt-3 px-2">
          A sneak peek into my continuous journey of learning, certifications, and upskilling.
        </p>
      </div>

      {/* Mobile: Single Card Carousel matching Achievement Section (No Sneak Peek & No Rounded Corners) (< md) */}
      <div className="md:hidden w-full max-w-[360px] sm:max-w-[420px] mx-auto">
        <div className="relative w-full h-[230px] sm:h-[260px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait" custom={mobileDirection}>
            {(() => {
              const currentCert = certificates[mobileIndex];
              const certImage = currentCert.image || currentCert;
              const certPdf = currentCert.pdf || null;

              return (
                <motion.div
                  key={mobileIndex}
                  custom={mobileDirection}
                  variants={mobileVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x < -40 || velocity.x < -300) {
                      handleMobileNext();
                    } else if (offset.x > 40 || velocity.x > 300) {
                      handleMobilePrev();
                    }
                  }}
                  onClick={() => {
                    if (certPdf) {
                      window.open(certPdf, '_blank');
                    } else {
                      setSelectedCert(certImage);
                    }
                  }}
                  className={`relative w-full h-full bg-gray-50 rounded-none overflow-hidden flex items-center justify-center cursor-pointer shadow-sm border ${
                    currentCert.starred ? 'border-yellow-400 ring-2 ring-yellow-400/20 bg-yellow-50/10' : 'border-gray-200/90'
                  }`}
                >
                  {currentCert.starred && (
                    <div className="absolute top-3.5 right-3.5 bg-gradient-to-br from-yellow-300 to-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md z-10" title="Featured">
                      <i className="fa-solid fa-star text-xs drop-shadow-xs"></i>
                    </div>
                  )}
                  <img 
                    src={certImage} 
                    alt={`Certificate ${mobileIndex + 1}`} 
                    className="w-full h-full object-contain p-4 select-none" 
                  />
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>

        {/* Mobile Arrow Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
          <button 
            type="button"
            onClick={handleMobilePrev}
            aria-label="Previous certificate"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-black hover:border-gray-400 hover:shadow-xs active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer select-none"
          >
            <i className="fa-solid fa-chevron-left text-xs"></i>
          </button>
          <button 
            type="button"
            onClick={handleMobileNext}
            aria-label="Next certificate"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-black hover:border-gray-400 hover:shadow-xs active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer select-none"
          >
            <i className="fa-solid fa-chevron-right text-xs"></i>
          </button>
        </div>
      </div>

      {/* Desktop: Infinite Auto-scrolling Carousel with Side Arrows (>= md) */}
      <div 
        className="hidden md:block relative w-full max-w-[1600px] mx-auto group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Fade */}
        <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        {/* Right Fade */}
        <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Left Arrow */}
        <button 
          type="button"
          onClick={scrollDesktopLeft}
          aria-label="Previous certificates"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:text-black hover:border-gray-400 hover:shadow-xs active:scale-95 transition-all duration-200 shadow-sm z-20 cursor-pointer select-none opacity-0 group-hover:opacity-100"
        >
          <i className="fa-solid fa-chevron-left text-xs"></i>
        </button>

        {/* Right Arrow */}
        <button 
          type="button"
          onClick={scrollDesktopRight}
          aria-label="Next certificates"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:text-black hover:border-gray-400 hover:shadow-xs active:scale-95 transition-all duration-200 shadow-sm z-20 cursor-pointer select-none opacity-0 group-hover:opacity-100"
        >
          <i className="fa-solid fa-chevron-right text-xs"></i>
        </button>

        {/* Scrolling Track */}
        <div 
          ref={desktopScrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto items-center py-8 px-12 md:px-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {scrollItems.map((cert, index) => {
            const certImage = cert.image || cert;
            const certPdf = cert.pdf || null;
            
            return (
            <div 
              key={index} 
              onClick={() => {
                if (certPdf) {
                  window.open(certPdf, '_blank');
                } else {
                  setSelectedCert(certImage);
                }
              }}
              className={`w-[280px] md:w-[350px] h-[200px] md:h-[245px] flex-shrink-0 bg-gray-50 rounded-none shadow-sm border ${cert.starred ? 'border-yellow-400 ring-2 ring-yellow-400/20' : 'border-gray-100'} overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer relative group/card`}
            >
              {cert.starred && (
                <div className="absolute top-4 right-4 bg-gradient-to-br from-yellow-300 to-yellow-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md z-10" title="Featured">
                  <i className="fa-solid fa-star text-sm drop-shadow-sm"></i>
                </div>
              )}
              <img 
                src={certImage} 
                alt={`Certificate ${index + 1}`} 
                className="w-full h-full object-contain p-4" 
              />
              
              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/90 text-gray-800 px-4 py-2 rounded-full opacity-0 group-hover/card:opacity-100 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300 font-semibold text-sm flex items-center gap-2 shadow-sm">
                  {certPdf ? (
                    <><i className="fa-solid fa-file-pdf"></i> Open PDF</>
                  ) : (
                    <><i className="fa-solid fa-magnifying-glass"></i> View</>
                  )}
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>

      {/* Full Picture Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedCert(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative z-10 w-full max-w-[900px] bg-white rounded-none shadow-2xl overflow-hidden font-poppins"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative w-full bg-white flex flex-col justify-center items-center p-4 md:p-8">
                <img 
                  src={selectedCert} 
                  alt="Certificate Full View" 
                  className="w-full h-auto max-h-[85vh] object-contain rounded-none" 
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
