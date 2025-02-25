import React from "react";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";

const TopSellingCard = () => {
  return (
    <div className="p-6 bg-neutral-800 rounded-2xl shadow-lg relative">
      <span className="text-gray-400">Top Selling Product</span>
      {/* More Options Button at Top Right */}
      <button className="absolute top-3 right-6 p-2 border border-gray-300 rounded-full">
        <FiMoreHorizontal className="text-white text-xl" />
      </button>
      {/* Two-Tone Button at Bottom Right */}
      <button className="absolute -bottom-2 md:-bottom-3 -right-2 md:-right-6 p-2 md:p-3 bg-black rounded-full">
        <div className="p-1 md:p-2 bg-yellow-500 rounded-full">
          <FiSearch className="text-white text-lg md:text-xl" />
        </div>
      </button>
    </div>
  );
};

export default TopSellingCard;
