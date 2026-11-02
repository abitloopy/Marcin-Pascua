import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isClickScrolling = useRef(false);

  // Check initial hash on load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && ["home", "about", "projects", "achievements", "contact"].includes(hash)) {
      setActiveSection(hash);
    }
  }, []);

  // Track currently visible section on scroll using getBoundingClientRect
  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "achievements", "contact"];
    
    const handleScroll = () => {
      // Do not override while smooth scroll animation from click is active
      if (isClickScrolling.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. If at the top of the page, activate 'home'
      if (scrollY < 120) {
        setActiveSection("home");
        return;
      }

      // 2. If reached the bottom of the page, activate 'contact'
      if (scrollY + windowHeight >= documentHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // 3. Detect which section covers the reading line (35% down viewport)
      const detectionLine = windowHeight * 0.35;
      let matched = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= detectionLine && rect.bottom >= detectionLine) {
            matched = id;
            break;
          }
        }
      }

      if (matched) {
        setActiveSection(matched);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);

    if (href.startsWith("mailto:") || href === "#contact") {
      if (href.startsWith("mailto:")) {
        return;
      }
      e.preventDefault();
      window.location.href = "mailto:pascua.marcin1@gmail.com";
      return;
    }

    e.preventDefault();
    const id = href.replace("#", "");
    
    // Immediately set active clicked state
    setActiveSection(id);
    isClickScrolling.current = true;

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      try { window.history.pushState(null, "", "#home"); } catch (err) {}
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        try { window.history.pushState(null, "", `#${id}`); } catch (err) {}
      }
    }

    // Re-enable scroll spy listener after smooth scroll finishes
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 850);
  };

  return (
    <motion.div 
      initial={{ y: -60, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 md:top-6 left-1/2 z-[90] w-[92vw] sm:w-[90vw] md:w-max font-poppins"
    >
      <header className="w-full bg-white/95 backdrop-blur-md shadow-[0_6px_30px_rgba(0,0,0,0.07)] border-0 rounded-full py-2.5 sm:py-3 px-4 pl-6 sm:pl-8 md:pl-9 pr-2.5 sm:pr-3 md:pr-3.5 flex items-center justify-between md:justify-center gap-7 sm:gap-8 md:gap-10 transition-all duration-300">
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center">
          <NavLinks 
            activeSection={activeSection}
            onNavClick={handleNavClick}
            itemClassName="text-gray-600 hover:text-[#637C50] font-medium"
            activeClassName="text-[#637C50] font-semibold"
          />
        </div>

        {/* Right: Resume Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href="/Marcin_Pascua_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#637C50] text-white px-5 py-2 md:px-5.5 md:py-2 rounded-full font-semibold text-xs md:text-[13.5px] hover:bg-[#A1C680] hover:-translate-y-0.5 transition-all duration-300 shadow-xs shrink-0 cursor-pointer"
          >
            <span>Resume</span>
            <i className="fa-solid fa-download text-[11px] md:text-xs"></i>
          </a>
        </div>

        {/* Mobile Navigation Header */}
        <div className="md:hidden flex items-center justify-between w-full">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-sm font-bold text-[#637C50] px-1 tracking-tight cursor-pointer"
          >
            Marcin Pascua
          </a>
          <div className="flex items-center gap-2">
            <a
              href="/Marcin_Pascua_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#637C50] text-white px-3.5 py-1 rounded-full text-xs font-semibold hover:bg-[#A1C680] transition-all duration-300 shadow-2xs"
            >
              Resume
            </a>
            <button 
              className="w-8 h-8 bg-[#637C50] text-white rounded-full flex items-center justify-center text-xs hover:bg-[#A1C680] transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[58px] right-0 w-[240px] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3 flex flex-col gap-1 border-0 z-[80] animate-in fade-in slide-in-from-top-2 duration-200">
          {[
            { name: "Home", href: "#home", id: "home" },
            { name: "About", href: "#about", id: "about" },
            { name: "Projects", href: "#projects", id: "projects" },
            { name: "Achievements", href: "#achievements", id: "achievements" },
            { name: "Contact", href: "mailto:pascua.marcin1@gmail.com", id: "contact" },
          ].map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`w-full py-2 px-3 rounded-lg text-left font-medium block text-sm transition-colors cursor-pointer ${
                activeSection === link.id
                  ? "text-[#637C50] bg-[#637C50]/15 font-bold"
                  : "text-gray-700 hover:text-[#637C50] hover:bg-[#637C50]/10"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}
