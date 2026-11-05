import React from "react";
import SlideUpComponent from "../animations/SlideUpComponent";
import SkillsMarquee from "./SkillsMarquee";

export default function AboutMe() {
  return (
    <SlideUpComponent>
      <section id="about" className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 font-poppins scroll-mt-20 overflow-hidden">
        <div id="about-intro" className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-12 lg:gap-16">
          
          {/* Left Column: ID Lace Card */}
          <div className="flex-1 flex justify-center items-center w-full py-4 md:py-6">
            <img 
              src="/marcin-id-pic.png" 
              alt="Marcin ID Badge" 
              className="w-[240px] sm:w-[270px] md:w-[320px] lg:w-[350px] max-w-full object-contain rotate-[10deg] drop-shadow-xl hover:-translate-y-2 hover:rotate-[6deg] transition-all duration-500 select-none" 
            />
          </div>

          {/* Right Column: About Me & Experience */}
          <div className="flex-[1.3] lg:flex-[1.4] w-full md:pl-8 lg:pl-12 flex flex-col items-start text-left">
            
            {/* About Me Section */}
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight mb-4">
                About Me
              </h2>

              <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[15.5px] leading-relaxed font-normal">
                I am a graduating student pursuing Bachelor of Science in Information Technology currently building my skills in web development and UI/UX design. As I continue my journey in technology, I’m learning how to develop functional, responsive, and user-centered web applications from designing interfaces and creating engaging user experiences to developing the front-end and back-end systems that bring those ideas to life.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-5">
                <a 
                  href="mailto:pascua.marcin1@gmail.com" 
                  aria-label="Email"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-200 bg-white text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 shadow-2xs text-xs cursor-pointer"
                >
                  <i className="fa-regular fa-envelope"></i>
                </a>
                <a 
                  href="https://github.com/abitloopy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-200 bg-white text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 shadow-2xs text-xs cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/marcinpascua" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-200 bg-white text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 shadow-2xs text-xs cursor-pointer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a 
                  href="https://www.instagram.com/kookyih" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-200 bg-white text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 shadow-2xs text-xs cursor-pointer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mt-10 md:mt-12 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight mb-6">
                Experience
              </h2>

              <div className="flex flex-col w-full">
                {/* Experience 1: myDoktora */}
                <div className="flex items-stretch gap-4 w-full">
                  {/* Logo & Timeline Connecting Line */}
                  <div className="w-12 sm:w-13 shrink-0 flex flex-col items-center">
                    <img 
                      src="/mydoktora-pic.png" 
                      alt="myDoktora Logo" 
                      className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl object-contain shrink-0 shadow-xs border border-gray-100" 
                    />
                    {/* Connecting vertical line */}
                    <div className="w-[2px] bg-gray-200 grow my-2"></div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col pb-8">
                    {/* Top line: Role / Company & Dates */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 w-full">
                      <div>
                        <h3 className="font-bold text-base sm:text-[17px] text-gray-950 leading-snug">
                          myDoktora
                        </h3>
                        <p className="font-semibold text-sm sm:text-base text-gray-900">
                          UI/UX Design Intern
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">
                        10/2026 - Present
                      </span>
                    </div>

                    {/* Location */}
                    <p className="italic text-xs sm:text-[13px] text-gray-600 mt-0.5">
                      New York, USA | PH-based Remote
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-3">
                      Collaborated with a senior UI/UX designer as part of Genuinexs' Philippines-based design team to enhance the user experience and visual design of the myDoktora platform, while contributing to web and mobile beta testing.
                    </p>
                  </div>
                </div>

                {/* Experience 2: Freelance Digital Artist */}
                <div className="flex items-start gap-4 w-full">
                  {/* Logo */}
                  <div className="w-12 sm:w-13 shrink-0 flex items-center justify-center">
                    <img 
                      src="/freelance-icon.png" 
                      alt="Freelance Icon" 
                      className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl object-contain p-2 shadow-xs border border-gray-200/90 bg-white" 
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col">
                    {/* Top line: Role / Company & Dates */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 w-full">
                      <div>
                        <h3 className="font-bold text-base sm:text-[17px] text-gray-950 leading-snug">
                          Freelance Digital Artist
                        </h3>
                        <p className="font-semibold text-sm sm:text-base text-gray-900">
                          Self-Employed
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">
                        01/2021 - 04/2023
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-3">
                      Designed custom digital artwork for commissioned local and international clients, translating concepts into high-quality illustrations through remote collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Skills Section: Animated end-to-end marquee */}
        <SkillsMarquee />
      </section>
    </SlideUpComponent>
  );
}
