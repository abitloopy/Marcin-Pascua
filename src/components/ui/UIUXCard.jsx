import React from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

export default function UIUXCard({ image, title, year, subtitle, badge }) {
  return (
    <motion.div
      className="w-full max-w-[800px] relative relative  overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="flex flex-col h-full w-full rounded-xl border bg-gray-100 p-5 shadow-xl font-poppins">
        <div className="">
          <img
            src={image}
            alt={title}
            className="w-full h-[380px] object-cover rounded-xl flex justify-center items-center "
          />
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-3xl leading-none text-gray-700 font-bold leading-[34px] mt-5">
              {title}
            </h1>
            <p className="italic text-gray-500 text-sm">{year}</p>
          </div>

          <div className="">
            <p className="text-gray-700  text-justify">{subtitle}</p>
          </div>

          <div className="mb-2">
            <SkillCard badge={badge} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
