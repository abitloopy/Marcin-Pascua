import React from "react";
import { Link } from "react-router-dom";
import SlideUpComponent from "../animations/SlideUpComponent";

export default function AboutMe() {
  return (
    <>
      <SlideUpComponent>
        <div id="about" className="flex flex-col items-center justify-center pt-32 md:pt-40 pb-24 px-4 w-full max-w-6xl mx-auto">
          {/* New Hero Composition */}
          <div className="relative w-full flex flex-col justify-center items-center">
            
            {/* Background Typography Image */}
            <div className="relative z-0 w-full flex justify-center px-4">
              <img 
                src="/hero-heading.png" 
                alt="My Portfolio" 
                className="w-full max-w-[1200px] h-auto object-contain drop-shadow-sm" 
              />
              
              {/* Animated Chat Bubble Overlay */}
              <div className="absolute top-[55%] left-[55%] sm:left-[58%] transform -translate-y-1/2 z-20 animate-[bounce_3s_infinite]">
                 <div className="relative bg-[#eacbc8] text-gray-800 px-6 py-2 md:px-8 md:py-3 rounded-[30px] font-medium text-base sm:text-lg md:text-xl shadow-md whitespace-nowrap font-poppins">
                   Hi! I'm Marcin
                   {/* Left pointing tail using CSS borders for a clean point */}
                   <div className="absolute top-1/2 left-[-10px] md:left-[-12px] transform -translate-y-1/2 w-0 h-0 border-t-[8px] md:border-t-[10px] border-t-transparent border-r-[12px] md:border-r-[16px] border-r-[#eacbc8] border-b-[8px] md:border-b-[10px] border-b-transparent"></div>
                 </div>
              </div>
            </div>



          </div>

          {/* Intro Section - Two Column Layout */}
          <div id="about-intro" className="w-full max-w-6xl mx-auto px-4 mt-24 flex flex-col md:flex-row items-center gap-12 md:gap-20 font-poppins scroll-mt-24">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start text-left w-full">
              
              {/* Mobile Layout: Text on Left, Picture on Right */}
              <div className="w-full flex md:hidden items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-8 bg-[#EAC9CB] rounded-full mt-1"></div>
                    <h2 className="text-2xl font-bold text-[#637C50] tracking-wide">ABOUT ME</h2>
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-gray-600 font-medium">
                    I'm an Information Technology student at the University of Cebu – Lapu-Lapu and Mandaue, currently learning full-stack web development and UI/UX design. I enjoy creating clean, responsive, and user-friendly digital experiences that combine functionality, creativity, and a touch of charm.
                  </p>
                </div>
                <div className="w-[150px] shrink-0 flex justify-end mt-2">
                  <img 
                    src="/marcin-id-pic.png" 
                    alt="Marcin ID" 
                    className="w-full object-contain rotate-[12deg] drop-shadow-xl" 
                  />
                </div>
              </div>

              {/* Desktop Layout: Heading & Text (Picture is in Right Content below) */}
              <div className="hidden md:block w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-10 bg-[#EAC9CB] rounded-full"></div>
                  <h2 className="text-4xl font-bold text-[#637C50] tracking-wide">ABOUT ME</h2>
                </div>
                <p className="text-[19px] leading-relaxed text-gray-600 mb-6 font-medium">
                  I'm an Information Technology student at the University of Cebu – Lapu-Lapu and Mandaue, currently learning full-stack web development and UI/UX design. I enjoy creating clean, responsive, and user-friendly digital experiences that combine functionality, creativity, and a touch of charm.
                </p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mb-8 mt-2 md:mt-0">
                {[
                  "HTML5 & CSS3", "JavaScript (ES6+)", "React.js", 
                  "Tailwind CSS", "Figma Design", "PHP", "Laravel", "SQL Server", "C Programming", "C#", "Java"
                ].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3.5 py-1.5 md:px-4 md:py-2 bg-[#F0F4EC] text-[#4A6B53] rounded-full text-[13.5px] md:text-[16px] font-semibold border border-[#D5E1D1] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <Link to="/about" className="bg-[#637C50] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium hover:bg-[#A1C680] hover:text-white hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 md:gap-3 shadow-md text-[13px] md:text-base">
                  Learn More <span>&rarr;</span>
                </Link>
                <div className="flex items-center gap-2 md:gap-3">
                  <a 
                    href="mailto:contact@example.com" 
                    className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                    aria-label="Email"
                  >
                    <i className="fa-regular fa-envelope text-base md:text-lg"></i>
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                    aria-label="GitHub"
                  >
                    <i className="fa-brands fa-github text-base md:text-lg"></i>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in text-base md:text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - ID Picture (Desktop Only) */}
            <div className="hidden md:flex flex-1 justify-center items-center w-full px-4">
              <img 
                src="/marcin-id-pic.png" 
                alt="Marcin ID" 
                className="w-full max-w-[450px] object-contain rotate-[12deg] hover:-translate-y-2 hover:rotate-[8deg] transition-all duration-500 drop-shadow-xl" 
              />
            </div>
          </div>
        </div>
      </SlideUpComponent>
    </>
  );
}
