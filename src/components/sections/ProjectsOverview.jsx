import React from 'react';
import { Link } from 'react-router-dom';
import ProjCard from '../ui/ProjCard';

export default function ProjectsOverview() {
  return (
    <div className="max-w-[1500px] mx-auto px-6 mt-16 md:mt-20 mb-10 font-poppins">
      <div className="bg-[#fcfcf9] rounded-[3rem] p-8 md:p-16 lg:p-24 flex flex-col xl:flex-row items-center justify-between gap-8 w-full overflow-hidden">
        
        {/* Left Text Block */}
        <div className="w-full xl:w-2/5 flex flex-col items-center xl:items-start text-center xl:text-left gap-6 xl:gap-10 z-20">
          <h2 className="text-[36px] sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.15] xl:leading-[1.1] tracking-tight text-[#637C50]">
            Projects that <br className="hidden xl:block" />
            showcase <br className="hidden xl:block" />
            my <span className="text-[#A1C680]">expertise</span>
          </h2>
          
          <Link 
            to="/projects" 
            className="group flex items-center gap-2 xl:gap-3 bg-[#637C50] text-white px-5 py-2.5 xl:px-8 xl:py-4 rounded-full font-bold text-[14px] xl:text-lg hover:bg-[#A1C680] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md xl:shadow-lg hover:shadow-xl shrink-0"
          >
            View all Projects
            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform text-xs xl:text-base"></i>
          </Link>
        </div>

        {/* Right Cards Staggered Layout */}
        <div className="w-full xl:w-3/5 relative flex flex-col xl:block gap-8 sm:gap-10 h-auto xl:h-[800px] flex-shrink-0 mt-4 xl:mt-0">
           {/* Saligra */}
           <div className="xl:absolute xl:top-0 xl:right-0 w-full sm:w-[85%] sm:mx-auto xl:mx-0 xl:w-[70%] z-10 hover:z-50 transition-all duration-300">
             <ProjCard
               image={"/saligra.png"}
               title={"Saligra"}
               year={"2026"}
               subtitle={"An advanced MCP-powered borrower reliability and risk-scoring system."}
               badge={["React", "Tailwind CSS", "MCP Server"]}
               useModal={true}
             />
           </div>

           {/* RECAP */}
           <div className="xl:absolute xl:top-[33%] xl:left-0 w-full sm:w-[85%] sm:mx-auto xl:mx-0 xl:w-[70%] z-20 hover:z-50 transition-all duration-300">
             <ProjCard
               image={"/recap.png"}
               title={"RECAP"}
               year={"2026"}
               subtitle={"A mobile-responsive quiz bowl management and automated scoring system."}
               badge={["Computer Vision", "React", "Supabase"]}
               useModal={true}
             />
           </div>

           {/* Chew! */}
           <div className="xl:absolute xl:bottom-0 xl:right-0 w-full sm:w-[85%] sm:mx-auto xl:mx-0 xl:w-[70%] z-30 hover:z-50 transition-all duration-300">
             <ProjCard
               image={"/chew.png"}
               title={"Chew!"}
               year={"2026"}
               subtitle={"[UI/UX] A comprehensive design case study for an AI-powered smart meal planner application."}
               badge={["Figma"]}
               useModal={true}
             />
           </div>
        </div>

      </div>
    </div>
  );
}
