import React from "react";
import EducCard from "../ui/EducCard";

export default function Education() {
  return (
    <div id="education" className="education w-full mx-auto max-w-7xl mt-6 lg:mt-0 px-2 sm:px-4 pb-20">
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-start mb-10 w-full px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#637C50] font-poppins text-left tracking-wide">
            Education
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4">
          <div className="w-full flex justify-center">
            <EducCard
              logo={"/uclm-logo.png"}
              title={"University of Cebu - Lapu-Lapu and Mandaue"}
              subtitle={"Bachelor of Science in Information Technology"}
              award={"Dean's Lister"}
              year={"2023-Present"}
            />
          </div>
          <div className="w-full flex justify-center">
            <EducCard
              logo={"/monhs-logo.png"}
              title={"Misamis Occidental National High School"}
              subtitle={"Accountancy, Business, and Management"}
              award={"With High Honors"}
              year={"2021-2023"}
            />
          </div>
          <div className="w-full flex justify-center">
            <EducCard
              logo={"/cnchs-logo.png"}
              title={"Calamba National Comprehensive School"}
              subtitle={"Special Program in Journalism"}
              award={"With High Honors"}
              year={"2017-2021"}
            />
          </div>
          <div className="w-full flex justify-center">
            <EducCard
              logo={"/ccs-logo.png"}
              title={"Calamba Central School"}
              award={"With High Honors"}
              year={"2011-2017"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
