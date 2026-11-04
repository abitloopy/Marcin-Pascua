import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjCard from "../ui/ProjCard";
import SlideUpComponent from "../animations/SlideUpComponent";

const projectsData = [
  {
    image: "/recap.webp",
    title: "RECAP",
    year: "2026",
    category: "Front-End",
    subtitle: "Led the UI/UX design and frontend development of a mobile-responsive Quiz Bowl management system using React and Supabase. The platform automates answer recognition and scoring via Computer Vision, OCR, and CNN technologies, featuring intuitive event workflows, real-time participant monitoring, and live leaderboard updates.",
    badge: ["Computer Vision", "OCR", "CNN", "React", "Supabase"],
    link: "https://www.kaja-recap.online/"
  },
  {
    image: "/chew.webp",
    title: "Chew!",
    year: "2026",
    category: "UI/UX",
    subtitle: "Conducted an end-to-end UX case study and interactive Figma prototype for an AI-powered smart meal planner. Defined user personas, information architecture, and user flows to deliver personalized recipe recommendations tailored to dietary needs, creating an intuitive and accessible meal planning experience.",
    badge: ["Figma"],
    link: "https://www.figma.com/proto/GQsry4a2UP5MapALYoFhZU/Chew-App?node-id=0-1&t=pLlWUjMdpooUQjPd-1"
  },
  {
    image: "/chishore-pic.webp",
    title: "Chishore",
    year: "2026",
    category: "Front-End",
    subtitle: "Developed a responsive yacht booking website with a modern user interface, enabling users to explore luxury yachts, browse destinations, and book charter experiences through an intuitive and engaging frontend experience.",
    badge: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://chishore.vercel.app/"
  },
  {
    image: "/zura.webp",
    title: "Zura",
    year: "2026",
    category: "UI/UX",
    subtitle: "Developed an end-to-end UX case study and interactive Figma prototype for a gamified recycling platform that promotes sustainable waste disposal. Conducted UX research and designed intuitive user journeys for activity tracking, point accumulation, and reward redemption to make eco-friendly habits rewarding and engaging.",
    badge: ["Figma"],
    link: "https://www.figma.com/proto/CA0PTO9pATWMmpGaRjmF9v/Zura?node-id=0-1&t=Nvb4hGSJ5qWwtfAr-1"
  },
  {
    image: "/saligra.webp",
    title: "Saligra",
    year: "2026",
    category: "Front-End",
    subtitle: "An intelligent borrower reliability and risk-scoring platform powered by the Model Context Protocol (MCP), evaluating creditworthiness through automated data analysis.",
    badge: ["React", "Tailwind CSS", "MCP Server", "Express", "TypeScript", "Node.js"],
    link: null
  },
  {
    image: "/scholaria.webp",
    title: "Scholaria",
    year: "2026",
    category: "Front-End",
    subtitle: "A smart scholarship recommendation platform that matches students with tailored academic opportunities based on eligibility criteria, streamlined applications, and real-time tracking.",
    badge: ["React", "Supabase", "Tailwind CSS"],
    link: null
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const carouselRef = useRef(null);

  const categories = ["All", "Front-End", "UI/UX"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(".project-card-item");
      const scrollAmount = card ? card.offsetWidth + 16 : 300;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(".project-card-item");
      const scrollAmount = card ? card.offsetWidth + 16 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <SlideUpComponent>
      <section 
        id="projects" 
        className="w-full bg-[#fcfcf9] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 font-poppins scroll-mt-20 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#637C50] tracking-tight leading-tight">
              My Featured Projects
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-2xl leading-relaxed mt-2.5 sm:mt-3">
              A collection of my recent work, showcasing my expertise in web development, software engineering, and UI/UX design.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-16 mb-8 sm:mb-10 md:mb-12">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`relative !bg-transparent hover:!bg-transparent active:!bg-transparent focus:!bg-transparent !border-0 !outline-none !shadow-none pb-2 sm:pb-2.5 px-1 sm:px-2 text-sm sm:text-base md:text-lg transition-colors cursor-pointer select-none ${
                    isActive ? "text-[#637C50] font-bold" : "text-[#5a6b82] hover:text-[#637C50] font-semibold"
                  }`}
                  style={{ backgroundColor: "transparent" }}
                >
                  <span>{category}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#637C50]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile: Horizontal Carousel with Sneak Peek of Next Card (< md) */}
          <div className="md:hidden w-full">
            <div 
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-4 px-4 -mx-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.title}
                  className="project-card-item w-[82vw] max-w-[340px] shrink-0 snap-start flex flex-col h-full"
                >
                  <ProjCard
                    image={project.image}
                    title={project.title}
                    year={project.year}
                    subtitle={project.subtitle}
                    badge={project.badge}
                    category={project.category}
                    link={project.link}
                  />
                </div>
              ))}
            </div>

            {/* Mobile Carousel Round Arrow Buttons (<) (>) */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous project"
                className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:border-gray-400 hover:text-black active:scale-95 shadow-sm transition-all cursor-pointer select-none"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next project"
                className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:border-gray-400 hover:text-black active:scale-95 shadow-sm transition-all cursor-pointer select-none"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>

          {/* Desktop: 6 Projects Grid (>= md) */}
          <motion.div 
            layout 
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex"
                >
                  <ProjCard
                    image={project.image}
                    title={project.title}
                    year={project.year}
                    subtitle={project.subtitle}
                    badge={project.badge}
                    category={project.category}
                    link={project.link}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </SlideUpComponent>
  );
}
