import React from "react";

export default function EducCard({ logo, title, subtitle, award, year }) {
  return (
    <div className="card font-poppins w-full h-full">
      <div className="school-logo flex justify-center items-center mb-2">
        <img className="w-24 h-24" src={logo} alt="school logo" />
      </div>

      <div className="content flex flex-col p-3">
        <h1 className="text-xl font-bold ">{title}</h1>
        <h2 className="text-md mt-3 text-justify">{subtitle}</h2>
        <p className="text-md mt-2">{award}</p>
        <p className="italic mt-5 text-sm">{year}</p>
      </div>
    </div>
  );
}
