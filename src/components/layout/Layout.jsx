import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative font-poppins">
      {children}
      
      {/* Global Floating Contact Button */}
      <a
        href="mailto:contact@example.com"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] bg-white border-2 border-[#637C50] text-[#637C50] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl group"
        aria-label="Contact Me"
      >
        <i className="fa-regular fa-message text-2xl md:text-3xl group-hover:animate-bounce"></i>
      </a>
    </div>
  );
}

