import React from "react";
import SkillCard from "../ui/SkillCard";

export default function Skills() {
  const skillsData = [
    {
      category: "UI/UX Design",
      skills: ["Figma", "Wireframing", "Prototyping", "User Interface (UI) Design"]
    },
    {
      category: "Frontend Development",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Laravel", "PHP"]
    },
    {
      category: "Database",
      skills: ["Supabase", "MySQL", "SQL Server Management Studio (SSMS)"]
    },
    {
      category: "Programming Languages",
      skills: ["Java", "C", "C#"]
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub"]
    }
  ];

  return (
    <div id="skills" className="w-full font-poppins px-4 sm:px-6 md:px-8 relative pb-8 sm:pb-10">
      <div className="flex justify-center md:justify-start w-full mb-8 sm:mb-10 mt-4 sm:mt-6 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#637C50] text-center md:text-left tracking-wide">
          Skills &amp; Technologies
        </h1>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-5xl mx-auto">
        {skillsData.map((section, idx) => (
          <SkillCard key={idx} title={section.category} badge={section.skills} />
        ))}
      </div>
    </div>
  );
}
