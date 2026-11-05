import React from "react";
import { motion } from "framer-motion";

// 4 sets of alternating flowers (Big + Small), with balanced spacing between all flowers
const flowers = [
  { size: "big", sway: -3 },
  { size: "small", sway: 3 },
  { size: "big", sway: -2 },
  { size: "small", sway: 4 },
  { size: "big", sway: -3 },
  { size: "small", sway: 2 },
  { size: "big", sway: -2 },
  { size: "small", sway: 3 },
];

export default function Hero() {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about-intro") || document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full bg-[#fcfcf9] rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[80px] lg:rounded-b-[100px] overflow-hidden pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-24 sm:pb-28 md:pb-32 lg:pb-36 px-6 sm:px-8 md:px-12 lg:px-16 font-poppins scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-14 md:gap-16 lg:gap-20">
        
        {/* Left Column: Heading, Subtitle & Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-start text-left w-full z-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-gray-950 tracking-tight leading-[1.08]">
            Hi!<br />
            I’m <span className="text-[#637C50]">Marcin</span>
          </h1>

          <p className="mt-5 md:mt-6 text-gray-800 text-[15px] sm:text-base md:text-[17px] font-normal leading-relaxed max-w-[460px]">
            UI/UX Designer &amp; Aspiring Full-Stack Developer creating functional, responsive, and user-centered digital experiences.
          </p>

          <div className="mt-7 md:mt-8">
            <a
              href="#about-intro"
              onClick={handleScrollToAbout}
              className="inline-flex items-center justify-center gap-2 bg-[#637C50] text-white px-6 py-2.5 sm:px-6.5 sm:py-3 rounded-full font-medium text-sm sm:text-base leading-none hover:bg-[#A1C680] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <span className="leading-none">Learn More</span>
              <i className="fa-solid fa-arrow-down text-xs transition-transform duration-300 group-hover:translate-y-0.5 leading-none"></i>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Marcin's Photo with Floating Badges */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex-1 flex justify-center items-center w-full relative"
        >
          <div className="relative flex justify-center items-center w-fit mx-auto">
            {/* Marcin's Picture */}
            <img
              src="/marcin-pic.png"
              alt="Marcin"
              className="w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] max-w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm"
            />

            {/* Floating Badge 1: LinkedIn (Top Right) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[4%] sm:top-[5%] right-[6%] sm:right-[8%] md:right-[9%] z-20"
            >
              <a
                href="https://linkedin.com/in/marcinpascua"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-white border border-gray-100 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#637C50] hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1.5 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer block"
              >
                <i className="fa-brands fa-linkedin-in text-base sm:text-lg md:text-xl"></i>
              </a>
            </motion.div>

            {/* Floating Badge 2: GitHub (Middle Left) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-[35%] -left-3 sm:-left-5 md:-left-6 -translate-y-1/2 z-20"
            >
              <a
                href="https://github.com/abitloopy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-white border border-gray-100 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#637C50] hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1.5 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer block"
              >
                <i className="fa-brands fa-github text-lg sm:text-xl md:text-2xl"></i>
              </a>
            </motion.div>

            {/* Floating Badge 3: Email (Lower Right) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-[64%] -right-3 sm:-right-5 md:-right-6 -translate-y-1/2 z-20"
            >
              <a
                href="mailto:pascua.marcin1@gmail.com"
                aria-label="Email"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-white border border-gray-100 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#637C50] hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1.5 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer block"
              >
                <i className="fa-regular fa-envelope text-base sm:text-lg md:text-xl"></i>
              </a>
            </motion.div>

            {/* Floating Badge 4: Instagram (Bottom-Left Curve of Portrait) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              className="absolute bottom-[4%] sm:bottom-[5%] md:bottom-[6%] left-[8%] sm:left-[10%] md:left-[12%] z-20"
            >
              <a
                href="https://www.instagram.com/kookyih"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-white border border-gray-100 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#637C50] hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1.5 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer block"
              >
                <i className="fa-brands fa-instagram text-base sm:text-lg md:text-xl"></i>
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Mini Garden & Animated Flying Bee */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-0 right-0 w-full overflow-visible pointer-events-none select-none z-10">
        
        {/* Animated Flying Bee Container */}
        <div className="relative w-full h-16 sm:h-20 mb-2 overflow-visible pointer-events-none">
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
            animate={{
              x: ["-10vw", "105vw"],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Inner smooth harmonic wave flutter & gentle tilt */}
            <motion.div
              animate={{
                y: [-7, 7, -7],
                rotate: [-3, 4, -3],
              }}
              transition={{
                y: {
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <img
                src="/bee.png"
                alt="Cute Bee"
                className="w-7 sm:w-8 md:w-9 h-auto drop-shadow-xs select-none pointer-events-none"
                style={{ imageRendering: "pixelated" }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Row of Roses / Mini Garden: 4 sets of alternating (Big + Small), balanced spacing between all flowers */}
        <div className="w-full max-w-5xl sm:max-w-6xl mx-auto px-4 sm:px-10 md:px-16 lg:px-20 flex justify-between items-end pointer-events-none select-none">
          {flowers.map((f, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center pointer-events-none select-none"
              animate={{
                rotate: [f.sway, -f.sway, f.sway],
              }}
              transition={{
                duration: 2.8 + (i % 3) * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 4) * 0.2,
              }}
            >
              <img
                src="/rose.png"
                alt={f.size === "big" ? "Big Rose" : "Small Rose"}
                className={`${
                  f.size === "big"
                    ? "w-7 sm:w-8 md:w-9 mb-0"
                    : "w-4 sm:w-4.5 md:w-5 mb-0.5"
                } h-auto select-none pointer-events-none drop-shadow-2xs`}
                style={{ imageRendering: "pixelated" }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

