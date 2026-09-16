import React from 'react';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import SlideUpComponent from '../components/animations/SlideUpComponent';

export default function About() {
  return (
    <>
      <div className="min-h-screen pt-24 px-4 pb-20">
        <SlideUpComponent>
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 mt-12 mb-20 px-4">
            
            {/* Left side: Picture */}
            <div className="flex-1 flex justify-center items-center p-4 mt-6 md:mt-0">
              <img 
                src="/marcin-formal-pic.jpg" 
                alt="Marcin Formal" 
                className="w-full max-w-[350px] object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Right side: Text & Icons */}
            <div className="flex-1 flex flex-col items-start text-left font-poppins">
              <p className='text-[#637C50] text-bold mb-2'>ABOUT ME</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#637C50] mb-6 tracking-wide">
                Marcin A. Pascua
              </h1>
              
              <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 mb-8 font-medium">
                I'm an Information Technology student at the University of Cebu – Lapu-Lapu and Mandaue, currently building my skills in full-stack web development and UI/UX design. As I continue my journey in technology, I'm learning how to develop functional, responsive, and user-centered web applications—from designing interfaces and creating engaging user experiences to developing the front-end and back-end systems that bring those ideas to life.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <i className="fa-brands fa-linkedin-in text-base md:text-lg"></i>
                </a>
                <a href="#" className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <i className="fa-brands fa-github text-base md:text-lg"></i>
                </a>
                <a href="#" className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <i className="fa-solid fa-envelope text-base md:text-lg"></i>
                </a>
              </div>
            </div>

          </div>
        </SlideUpComponent>

        {/* Skills Section */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-20">
          <Skills />
        </div>

        {/* Education Section at the bottom */}
        <div className="w-full max-w-6xl mx-auto px-4 flex justify-center">
          <Education />
        </div>
      </div>
    </>
  );
}
