import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#fcfcf9] pt-12 pb-8 mt-auto border-t border-gray-100 flex flex-col items-center justify-center font-poppins">


      <div className="flex items-center gap-4 mb-6">
        <a 
          href="mailto:contact@example.com" 
          className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm"
          aria-label="Email"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#637C50] flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-sm"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <p className="text-gray-500 font-medium text-[15px] flex items-center gap-2 mb-1">
        Designed & Built with <i className="fa-solid fa-heart text-[#EAC9CB] animate-pulse"></i> by Marcin
      </p>
      <p className="text-gray-400 text-xs tracking-wider">
        © {new Date().getFullYear()} ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}
