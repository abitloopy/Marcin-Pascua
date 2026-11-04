import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideUpComponent from "../animations/SlideUpComponent";
import { achievementsData } from "../../data/achievements";

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % achievementsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + achievementsData.length) % achievementsData.length);
  };

  const currentItem = achievementsData[currentIndex];

  // Award helper (Gold, Silver, Bronze color styling)
  const getAwardConfig = (award) => {
    const a = (award || "").toLowerCase();
    if (a.includes("1st") || a.includes("champ")) {
      return {
        textColor: "text-[#B8860B]",
        icon: "fa-solid fa-trophy text-[#D4AF37]",
        label: award
      };
    }
    if (a.includes("2nd") || a.includes("silver")) {
      return {
        textColor: "text-[#64748B]",
        icon: "fa-solid fa-medal text-[#94A3B8]",
        label: award
      };
    }
    if (a.includes("3rd") || a.includes("bronze")) {
      return {
        textColor: "text-[#B45A28]",
        icon: "fa-solid fa-medal text-[#CD7F32]",
        label: award
      };
    }
    return {
      textColor: "text-gray-700",
      icon: "fa-solid fa-award text-gray-500",
      label: award
    };
  };

  const awardConfig = getAwardConfig(currentItem.award);

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 30 : -30,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.35, ease: "easeOut" }
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -30 : 30,
      transition: { duration: 0.25, ease: "easeIn" }
    })
  };

  return (
    <SlideUpComponent>
      <section 
        id="achievements" 
        className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 font-poppins scroll-mt-20 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#637C50] tracking-tight leading-tight">
              My Journey & Milestones
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed mt-2.5 sm:mt-3 px-2">
              A visual gallery of the competitions I've joined, the challenges I've conquered, and the recognitions I've received along the way. Every picture tells a story of growth and learning.
            </p>
          </div>

          {/* Carousel Card Container */}
          <div className="max-w-[1000px] mx-auto w-full">
            <div className="relative bg-white rounded-none border border-gray-200/90 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-5 sm:p-8 md:p-11 min-h-[380px] sm:min-h-[420px] md:min-h-[450px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-11 items-center"
                >
                  {/* Left: Clean, Photographic Image (Non-clickable) */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] rounded-none overflow-hidden bg-gray-50 shadow-xs border border-gray-100/80 select-none">
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>

                  {/* Right: Achievement Details */}
                  <div className="flex flex-col items-start justify-center text-left">
                    {/* Award label without bubble */}
                    <div className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase select-none ${awardConfig.textColor}`}>
                      <i className={`${awardConfig.icon} text-xs`}></i>
                      <span>{awardConfig.label}</span>
                    </div>

                    {/* Contest Title */}
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold text-gray-950 tracking-tight leading-snug mt-3.5 mb-1.5">
                      {currentItem.title}
                    </h3>

                    {/* Date placed below the contest title */}
                    <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-gray-400 font-medium mb-4">
                      <i className="fa-regular fa-calendar text-[11px] text-gray-400"></i>
                      <span>{currentItem.year}</span>
                    </div>

                    {/* Delicate Divider Line */}
                    <hr className="w-full border-t border-gray-100 mb-4" />

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                      {currentItem.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Circular Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous achievement"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-black hover:border-gray-400 hover:shadow-xs active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer select-none"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next achievement"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-black hover:border-gray-400 hover:shadow-xs active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer select-none"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>

        </div>
      </section>
    </SlideUpComponent>
  );
}
