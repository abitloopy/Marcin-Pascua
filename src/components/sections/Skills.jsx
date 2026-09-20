import React from "react";
import SlideRightComponent from "../animations/SlideRightComponent";
import SkillCard from "../ui/SkillCard";

export default function Skills() {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Figma"]
    },
    {
      category: "Backend Development",
      skills: ["PHP", "Laravel", "SQL Server"]
    },
    {
      category: "Other Languages",
      skills: ["C Programming", "C#", "Java"]
    }
  ];

  return (
    <div id="skills" className="w-full font-poppins px-4 relative pb-10">
      <hr className="w-full border-t-2 border-gray-100 max-w-6xl mx-auto mb-10" />
      <div className="flex justify-center md:justify-start w-full mb-10 mt-6 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#637C50] text-center md:text-left tracking-wide">
          Skills
        </h1>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-5xl mx-auto">
        {skillsData.map((section, idx) => (
          <SkillCard key={idx} title={section.category} badge={section.skills} />
        ))}
      </div>
    </div>
  );
}
