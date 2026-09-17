import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  { image: "/topcit.png", pdf: "/topcit-cert.pdf", starred: true },
  { image: "/cert1.png" },
  { image: "/cert2.png" },
  { image: "/cert3.png" },
  { image: "/cert4.png" },
  { image: "/cert5.png" }
];

export default function CertificatesOverview() {
  const scrollRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the array several times to create a seamless infinite loop length
  const scrollItems = [...certificates, ...certificates, ...certificates, ...certificates];

  useEffect(() => {
    let animationFrameId;
    
    const autoScroll = () => {
      if (scrollRef.current && !isHovered && !selectedCert) {
        // Slowly scroll right
        scrollRef.current.scrollLeft += 1;
        
        // Reset to beginning if reached the end to create infinite effect
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 1
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, selectedCert]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-0 pb-20 w-full overflow-hidden bg-white flex flex-col items-center justify-center font-poppins relative">
      <div className="flex flex-col items-center text-center mb-10 px-4 md:px-0 mt-6">
        <h2 className="text-[34px] leading-[1.15] sm:text-5xl md:text-3xl lg:text-5xl text-gray-900 font-extrabold mb-4 md:mb-6 max-w-3xl">
          My Certifications
        </h2>
        <p className="text-gray-500 font-medium text-[15px] md:text-lg max-w-xl mx-auto mb-8">
          A sneak peek into my continuous journey of learning, certifications, and upskilling.
        </p>
        <Link 
          to="/achievements#certificates" 
          className="group flex items-center gap-2 md:gap-3 bg-[#637C50] text-white px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-[14px] md:text-lg hover:text-white hover:bg-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-md md:shadow-lg hover:shadow-xl shrink-0"
        >
          View All Certificates 
          <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform text-[11px] md:text-base"></i>
        </Link>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full max-w-[1600px] mx-auto group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Left Fade */}
        <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        {/* Right Fade */}
        <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Left Arrow */}
        <button 
          onClick={scrollLeft}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#637C50] hover:text-white hover:border-[#637C50] transition-all duration-300 shadow-md z-20 opacity-0 group-hover:opacity-100 disabled:opacity-50"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        {/* Right Arrow */}
        <button 
          onClick={scrollRight}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#637C50] hover:text-white hover:border-[#637C50] transition-all duration-300 shadow-md z-20 opacity-0 group-hover:opacity-100 disabled:opacity-50"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>

        {/* Scrolling Track */}
        <div 
          ref={scrollRef}
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
              className={`w-[280px] md:w-[350px] h-[200px] md:h-[245px] flex-shrink-0 bg-gray-50 rounded-2xl shadow-sm border ${cert.starred ? 'border-yellow-400 ring-2 ring-yellow-400/20' : 'border-gray-100'} overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer relative group/card`}
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
              className="relative z-10 w-full max-w-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden font-poppins"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative w-full bg-white flex flex-col justify-center items-center p-4 md:p-8">
                <img 
                  src={selectedCert} 
                  alt="Certificate Full View" 
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg" 
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
