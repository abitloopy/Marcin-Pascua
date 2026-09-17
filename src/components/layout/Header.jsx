import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SlideDownComponent from "../animations/SlideDownComponent";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[90] w-[90vw] md:w-max font-poppins">
      <header className="w-full bg-white border-2 border-transparent md:border-[#637C50] shadow-sm rounded-full p-1.5 md:p-2 pl-4 md:pl-8 pr-1.5 md:pr-2 flex items-center justify-end md:justify-center gap-4 md:gap-8 transition-all duration-300">
        
        {/* Center: Navigation (Desktop) */}
        <div className="hidden md:flex items-center">
           <NavLinks itemClassName="text-[#637C50] hover:text-[#A1C680]" />
        </div>

        {/* Right: Resume Button (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-1.5 md:gap-2">
          <a
            href="/Marcin_Pascua_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-[#637C50] text-white px-3.5 py-1.5 md:px-6 md:py-2.5 rounded-full font-bold hover:bg-[#A1C680] hover:text-white hover:-translate-y-0.5 transition-all duration-300 items-center gap-1.5 md:gap-2 shadow-sm text-[13px] md:text-base shrink-0 mr-0.5 md:mr-1"
          >
            Resume <i className="fa-solid fa-download text-[11px] md:text-sm"></i>
          </a>
          
          <button 
            className="md:hidden w-8 h-8 bg-[#637C50] text-white rounded-full flex items-center justify-center text-sm mr-0.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[70px] right-0 w-[260px] bg-white rounded-2xl shadow-2xl p-5 flex flex-col gap-2 border border-gray-100 z-[80]">
          <div className="flex flex-col w-full mb-2">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Achievements", href: "/achievements" }
            ].map((link, i) => (
              <div key={i} onClick={() => setMobileMenuOpen(false)}>
                {link.href.includes("#") ? (
                  <a href={link.href} className="w-full py-3.5 text-left font-semibold text-[#637C50] hover:text-[#A1C680] border-b border-gray-100 transition-colors block">
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.href} className="w-full py-3.5 text-left font-semibold text-[#637C50] hover:text-[#A1C680] border-b border-gray-100 transition-colors block">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
