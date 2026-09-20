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
                className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[350px] object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Right side: Text & Icons */}
            <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left font-poppins">
              <p className='text-[#637C50] text-bold mb-2'>ABOUT ME</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#637C50] mb-4 tracking-wide">
                Marcin A. Pascua
              </h1>
              <div className="mb-6 flex">
                <span className="bg-[#637C50]/10 text-[#637C50] font-bold text-sm px-4 py-1.5 rounded-full border border-[#637C50]/20 flex items-center gap-2 shadow-sm">
                  <i className="fa-solid fa-award"></i> Level 3 TOPCIT Passer
                </span>
              </div>

              <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 mb-8 font-medium">
                Hi! I'm Marcin. I am currently building my skills in web development and UI/UX design. As I continue my journey in technology, I'm learning how to develop functional, responsive, and user-centered web applications—from designing interfaces and creating engaging user experiences to developing the front-end and back-end systems that bring those ideas to life.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/marcinpascua" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <i className="fa-brands fa-linkedin-in text-base md:text-lg"></i>
                </a>
                <a href="https://github.com/abitloopy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <i className="fa-brands fa-github text-base md:text-lg"></i>
                </a>
                <a href="mailto:pascua.marcin1@gmail.com" className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm">
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

        {/* TOPCIT Certificate Section */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-20">
          <SlideUpComponent>
            <div className="flex justify-center md:justify-start w-full mb-10 max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#637C50] text-center md:text-left tracking-wide">
                Professional Certification
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm max-w-5xl mx-auto">

              {/* Image/Logo */}
              <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                <img
                  src="/topcit.png"
                  alt="TOPCIT Certificate"
                  className="w-full max-w-[200px] object-contain border border-gray-100 p-2 rounded-lg"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-3/4 flex flex-col items-center md:items-start text-center md:text-left font-poppins">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Test of Practical Competency in IT (TOPCIT)
                </h3>
                <p className="text-[#637C50] font-semibold text-sm md:text-base mb-4">
                  Level 3 Passer
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                  Achieved Level 3 proficiency in the TOPCIT examination, validating practical knowledge and competencies in software engineering, database management, network security, and IT business principles.
                </p>
                <a
                  href="/topcit-cert.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#637C50] font-medium text-sm md:text-base hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900 pb-0.5"
                >
                  View Certificate Document <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
              </div>
            </div>
          </SlideUpComponent>
        </div>

        {/* Education Section at the bottom */}
        <div className="w-full max-w-6xl mx-auto px-4 flex justify-center">
          <Education />
        </div>
      </div>
    </>
  );
}
