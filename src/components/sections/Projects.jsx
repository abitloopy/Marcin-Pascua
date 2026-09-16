import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjCard from "../ui/ProjCard";

const projectsData = [
  {
    image: "/diaworld.png",
    title: "Diaworld",
    year: "2023",
    subtitle: "First webdev passion project of an online jewelry store",
    badge: ["HTML", "CSS", "Javascript"]
  },
  {
    image: "/multivape.png",
    title: "Multivape Shop",
    year: "2024",
    subtitle: "First group project of an online extension of a physical vape store",
    badge: ["Java"]
  },
  {
    image: "/beedget.png",
    title: "Beedget",
    year: "2025",
    subtitle: "A simple budget planner system that helps you track your savings and expense. User and admin side are made using C# windows forms",
    badge: ["C#", "SQL Server Management Studio"]
  },
  {
    image: "/saligra.png",
    title: "Saligra",
    year: "2026",
    subtitle: "An MCP-Powered borrower reliability system",
    badge: ["React", "Tailwind CSS", "MCP Server (Tools)", "Express (Client)", "TypeScript", "Node.js"]
  },
  {
    image: "/recap.png",
    title: "RECAP",
    year: "2026",
    subtitle: "A mobile-responsive quiz bowl management and automated scoring system that streamlines event organization, answer recognition, scoring, participant monitoring, and real-time leaderboard updates.",
    badge: ["Computer Vision", "OCR", "Convolutional Neural Networks (CNN)", "React", "Supabase"]
  },
  {
    image: "/chew.png",
    title: "Chew!",
    year: "2026",
    subtitle: "[UI/UX] An AI-Powered Smart Meal Planner Application",
    badge: ["Figma"]
  },
  {
    image: "/zura.png",
    title: "Zura",
    year: "2026",
    subtitle: "[UI/UX] An IoT-enabled smart waste management system that provides real-time monitoring of waste-bin levels and conditions to support timely collection and more efficient waste management.",
    badge: ["Figma"]
  }
].sort((a, b) => parseInt(b.year) - parseInt(a.year));

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState("All");

  const years = ["All", ...Array.from(new Set(projectsData.map(p => p.year)))];
  
  const filteredProjects = selectedYear === "All" 
    ? projectsData 
    : projectsData.filter(p => p.year === selectedYear);

  // Auto-play for main gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const currentProject = projectsData[currentIndex];

  return (
    <div id="projects" className="overflow-hidden pt-28 md:pt-36 pb-10 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Intro Heading & Subheading */}
        <div className="flex flex-col items-center text-center mb-16 mt-4">
          <h1 className="text-4xl md:text-5xl lg:text-5xl text-gray-900 font-bold mb-3 leading-tight">
            My Featured <span className="text-[#637C50]">Projects</span>
          </h1>
          <p className="text-gray-500 font-medium text-[15px] md:text-base max-w-3xl leading-relaxed mx-auto">
            A collection of my recent work, showcasing my expertise in web development, software engineering, and UI/UX design. Each project represents a unique challenge and a creative solution.
          </p>
        </div>

        {/* Main Featured Image Area (Slideshow) */}
        <div className="relative w-full max-w-[1000px] mx-auto flex items-center justify-center mb-24">
          {/* Outer Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-100 text-gray-500 flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md z-10"
          >
            <i className="fa-solid fa-arrow-left text-sm md:text-base"></i>
          </button>

          <div className="relative w-full aspect-[4/3] md:aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-xl group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentProject.image}
                alt={currentProject.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full object-cover opacity-90"
              />
            </AnimatePresence>
            
            {/* Main Image Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
               <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-[#637C50] px-2.5 py-1 rounded text-xs font-bold tracking-widest uppercase">
                    {currentProject.year}
                  </span>
                  {currentProject.badge.slice(0, 3).map((b, i) => (
                    <span key={i} className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-medium backdrop-blur-sm border border-white/10">
                      {b}
                    </span>
                  ))}
               </div>
               <h2 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-md">{currentProject.title}</h2>
               <p className="text-sm md:text-base text-gray-200 line-clamp-2 max-w-2xl drop-shadow-sm">{currentProject.subtitle}</p>
            </div>
          </div>
          
          {/* Outer Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#637C50] text-white flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#4a5d3c] z-10"
          >
            <i className="fa-solid fa-arrow-right text-sm md:text-base"></i>
          </button>
        </div>
      </div>

      {/* Projects Grid with Filter */}
      <div className="w-full bg-gray-50 pt-16 pb-24 px-4 border-t border-gray-100">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-7xl mx-auto w-full">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-1.5 rounded-full font-semibold transition-all duration-300 text-xs md:text-sm border shadow-sm ${
                selectedYear === year
                  ? "bg-[#637C50] text-white border-[#637C50] shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-[#A1C680] hover:text-white hover:border-[#A1C680] hover:-translate-y-0.5"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full flex justify-center"
              >
                <ProjCard
                  image={project.image}
                  title={project.title}
                  year={project.year}
                  subtitle={project.subtitle}
                  badge={project.badge}
                  variant="direct"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
