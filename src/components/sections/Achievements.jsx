import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AchievementCard from "../ui/AchievementCard";

import { achievementsData } from "../../data/achievements";

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play moving animation
  useEffect(() => {
    // Only auto-play if the modal is not open
    if (selectedAchievement) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievementsData.length);
    }, 4000); // Changes slide every 4 seconds

    return () => clearInterval(interval);
  }, [selectedAchievement]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % achievementsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + achievementsData.length) % achievementsData.length);
  };

  const handleCardClick = (index) => {
    if (index === currentIndex) {
      // Active center card clicked, open modal
      setSelectedAchievement(achievementsData[index]);
    } else {
      // Side card clicked, bring to center
      setCurrentIndex(index);
    }
  };

  return (
    <div id="achievements" className="mx-auto w-full max-w-[1600px] pt-20 pb-0 px-4 overflow-hidden font-poppins relative">
      {/* Header matching inspiration layout (centered) */}
      <div className="flex flex-col items-center text-center mb-10 px-4 md:px-0">
        <span className="text-[#637C50] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4">Behind the Scenes</span>
        <h1 className="text-[34px] leading-[1.15] sm:text-5xl md:text-4xl lg:text-5xl text-gray-900 font-extrabold mb-4 md:mb-6 max-w-3xl">
          Curious What Else I've Achieved?
        </h1>
        <p className="text-gray-500 font-medium text-[15px] md:text-lg mb-8 max-w-xl">
          Explore more milestones, competitions, and technical challenges from my journey.
        </p>
        
        <Link 
          to="/achievements" 
          className="group flex items-center gap-2 md:gap-3 bg-[#637C50] text-white px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-[14px] md:text-lg hover:text-white hover:bg-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-md md:shadow-lg hover:shadow-xl shrink-0"
        >
          View All Achievements <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>

      {/* 3D Carousel Wrapper */}
      <div className="relative w-full max-w-[1200px] mx-auto mt-10 -mb-16 md:-mb-24">
        
        {/* Outer Left Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 md:left-4 top-[100px] md:top-1/2 md:-translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#637C50] hover:text-white hover:border-[#637C50] transition-all duration-300 shadow-md z-50"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        {/* Outer Right Arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-0 md:right-4 top-[100px] md:top-1/2 md:-translate-y-1/2 w-12 h-12 rounded-full bg-[#637C50] text-white flex items-center justify-center hover:bg-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-md z-50"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>

        {/* 3D Carousel Container */}
        <div 
          className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center" 
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
        {achievementsData.map((item, index) => {
          let distance = index - currentIndex;
          
          // Adjust for looping
          if (distance > achievementsData.length / 2) {
            distance -= achievementsData.length;
          } else if (distance < -achievementsData.length / 2) {
            distance += achievementsData.length;
          }

          // Math for 3D positioning
          // On mobile, items are closer together. On desktop, they spread out.
          const xOffset = isMobile ? 220 : 450; 
          const translateX = distance * xOffset; 
          
          // Push items back in Z space the further they are from center
          const translateZ = Math.abs(distance) * -200;
          
          // Rotate items inward facing the user (removed as requested)
          const rotateY = 0;
          
          // Scale and opacity logic
          const scale = 1 - Math.abs(distance) * 0.15;
          const opacity = Math.abs(distance) >= 3 ? 0 : 1 - Math.abs(distance) * 0.3;
          const zIndex = 100 - Math.abs(distance);
          
          // Hide items far out of view
          const isVisible = Math.abs(distance) <= 2;

          return (
            <div 
              key={index}
              onClick={() => handleCardClick(index)}
              className="absolute top-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] cursor-pointer shadow-2xl rounded-2xl"
              style={{
                width: isMobile ? "320px" : "600px",
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                visibility: isVisible ? 'visible' : 'hidden',
                pointerEvents: isVisible ? 'auto' : 'none',
                filter: Math.abs(distance) > 0 ? "blur(2px) grayscale(40%)" : "blur(0px) grayscale(0%)"
              }}
            >
              <AchievementCard
                logo={item.logo}
                image={item.image}
                title={item.title}
                award={item.award}
                year={item.year}
              />
            </div>
          );
        })}
        </div>
      </div>

      {/* Full Picture Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedAchievement(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative z-10 w-full max-w-[1000px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row font-poppins max-h-[90vh]"
            >
              {/* Image side */}
              <div className="relative w-full md:w-3/5 bg-black flex flex-col justify-center items-center group">
                {selectedAchievement.pdf ? (
                  <a href={selectedAchievement.pdf} target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center relative cursor-pointer">
                    <img 
                      src={selectedAchievement.image} 
                      alt={selectedAchievement.title} 
                      className="w-full h-auto max-h-[50vh] md:max-h-full object-contain group-hover:opacity-80 transition-opacity duration-300" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-black/60 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        <span className="font-medium">Click to open PDF</span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <img 
                    src={selectedAchievement.image} 
                    alt={selectedAchievement.title} 
                    className="w-full h-auto max-h-[50vh] md:max-h-full object-contain" 
                  />
                )}
                
                {/* Close Button Mobile */}
                <button 
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 md:hidden bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content side (labels) */}
              <div className="p-6 md:p-8 flex flex-col w-full md:w-2/5 overflow-y-auto">
                {/* Close Button Desktop */}
                <button 
                  onClick={() => setSelectedAchievement(null)}
                  className="hidden md:flex self-end bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full transition-colors mb-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex flex-col h-full justify-center">
                  <div className="flex items-center gap-3 mb-4">
                     <img src={selectedAchievement.logo} alt="Logo" className="w-10 h-10 object-contain rounded-md" />
                     <span className="text-gray-500 font-medium uppercase tracking-wider text-sm">{selectedAchievement.year}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {selectedAchievement.title}
                  </h2>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center bg-[#637C50]/10 border border-[#637C50]/20 text-[#637C50] px-5 py-2.5 rounded-xl font-bold text-lg shadow-sm">
                      {selectedAchievement.award}
                    </div>
                  </div>

                  {selectedAchievement.description && (
                    <p className="text-gray-600 text-base leading-relaxed">
                      {selectedAchievement.description}
                    </p>
                  )}
                  
                  {selectedAchievement.pdf && (
                    <div className="mt-6">
                      <a 
                        href={selectedAchievement.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#637C50] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#A1C680] transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300"
                      >
                        View Full Certificate
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
