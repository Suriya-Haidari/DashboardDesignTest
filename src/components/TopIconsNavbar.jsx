import React, { useState } from "react";
import { FiSearch, FiBell, FiSettings, FiPower } from "react-icons/fi";

const TopIconsNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const icons = [FiSearch, FiBell, FiSettings, FiPower];

  return (
    <div className="w-full flex justify-end">
      <div className="flex items-center space-x-2 md:space-x-4 px-3 md:px-6 py-2 bg-gray-800 rounded-2xl shadow-lg">
        {icons.map((Icon, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-2 md:p-3 rounded-full transition-all ${
              activeIndex === index ? "bg-yellow-500 text-black" : "bg-black hover:bg-gray-700"
            }`}
          >
            <Icon className="text-white text-lg md:text-xl" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopIconsNavbar;
