import React from "react";
import { motion } from "framer-motion";

const AchievementCard = ({ logo, image, title, award, year }) => {
  return (
    <div className="w-full flex flex-col items-center group cursor-pointer">
      <div className="w-full relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Optional small logo in top right if needed */}
        {logo && (
          <img className="w-10 h-10 md:w-14 md:h-14 absolute top-4 right-4 drop-shadow-md z-10" src={logo} alt="logo" />
        )}

        {/* Hover Overlay with text */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 md:p-10">
          <span className="text-[#a4c987] font-bold text-sm md:text-base mb-2 tracking-wider uppercase font-poppins">
            {award} • {year}
          </span>
          <h1 className="text-xl md:text-3xl text-white font-bold leading-tight font-poppins drop-shadow-lg mb-4">
            {title}
          </h1>
          <button className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors shadow-lg flex items-center gap-2">
            View <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
