"use client";

import { SholawatLyric } from "@/lib/data";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import EachCard from "./EachCard"; // Correct the import

const SholawatCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {SholawatLyric.map((data, index) => (
        <div key={index} className="px-5">
          <div
            className="flex justify-between items-center p-2 cursor-pointer border border-gray-700 rounded"
            onClick={() => handleToggle(index)}
          >
            <p className="text-white">{data.majelis}</p>
            {activeIndex === index ? (
              <FaChevronUp className="text-white" />
            ) : (
              <FaChevronDown className="text-white" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out rounded-lg ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="py-2 border-t border-gray-600 flex flex-wrap justify-center gap-4">
              <EachCard majelis={data.majelis} lyrics={data.lyrics} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SholawatCard;
