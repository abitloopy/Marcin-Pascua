import React, { useState } from "react";
import TechBadge from "./TechBadge";

export default function ProjCard({ 
  image, 
  title, 
  subtitle, 
  year, 
  badge = [],
  category = "Front-End",
  link = null
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isUIUX = category === "UI/UX";

  return (
    <div className="group w-full bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden font-poppins">
      {/* Card Image Area */}
      <div className="relative aspect-[16/10] w-full bg-white overflow-hidden flex items-center justify-center p-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
        />
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Title & Small Action Button Row */}
        <div className="flex items-center justify-between gap-3 mb-1 min-h-[32px]">
          <h3 className="text-xl font-bold text-gray-950 tracking-tight leading-snug truncate">
            {title}
          </h3>

          {/* Symmetrically balanced small action button */}
          {link && link !== "#" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 px-3 inline-flex items-center justify-center gap-1.5 bg-[#637C50] text-white rounded-full font-medium text-xs leading-none hover:bg-[#A1C680] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 shrink-0 cursor-pointer"
            >
              <span>View</span>
              {isUIUX ? (
                <i className="fa-brands fa-figma text-[10px]"></i>
              ) : (
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              )}
            </a>
          )}
        </div>

        {/* Year */}
        <p className="text-xs text-gray-400 font-medium mb-3 leading-none">
          {year}
        </p>

        {/* Description with Read more toggle */}
        <div className={`transition-all duration-300 ${isExpanded ? "min-h-[66px] h-auto" : "h-[66px] overflow-hidden"}`}>
          <p className={`text-gray-600 text-[13px] sm:text-[13.5px] leading-relaxed font-normal ${isExpanded ? "" : "line-clamp-2"}`}>
            {subtitle}
          </p>
          {subtitle && subtitle.length > 90 && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1 text-[11px] font-medium text-gray-500 hover:text-black inline-flex items-center gap-1 cursor-pointer transition-colors select-none"
            >
              <span>{isExpanded ? "Show less" : "Read more"}</span>
              <i className={`fa-solid fa-chevron-down text-[8px] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}></i>
            </button>
          )}
        </div>

        {/* Horizontal Line between Description and Tech Stack */}
        <hr className="border-t border-gray-100 my-4" />

        {/* Tech Stack Badges (Icon + Label) */}
        <div className="flex-1 flex flex-wrap content-start gap-1.5 min-h-[56px]">
          {badge.map((item, index) => (
            <TechBadge key={index} name={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
