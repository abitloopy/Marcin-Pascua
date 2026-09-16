import React from "react";

const Badge = ({ text }) => (
  <span className="px-4 py-2 bg-[#F0F4EC] text-[#4A6B53] rounded-full text-[14.5px] font-semibold border border-[#D5E1D1] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
    {text}
  </span>
);

export default function SkillCard({ title, badge }) {
  return (
    <div className="skill-card flex flex-col md:flex-row justify-start items-start gap-4 md:gap-8 p-1 font-poppins mx-auto h-full w-full">
      <div className="title w-full md:w-[35%] text-left pt-1">
        <h1 className="text-[20px] md:text-2xl font-semibold text-gray-800">{title}</h1>
      </div>

      <div className="badge flex flex-wrap gap-2 justify-start w-full md:w-[65%]">
        {badge.map((b, index) => (
          <Badge key={index} text={b} />
        ))}
      </div>
    </div>
  );
}
