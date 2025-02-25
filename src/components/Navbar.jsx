import React, { useState } from "react";
import { FiHome, FiUser, FiMessageSquare, FiSettings, FiPower } from "react-icons/fi";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Home is active by default

  return (
    <div className="md:hidden flex items-center justify-between p-4 bg-neutral-600 rounded-b-3xl">
      <div className="text-2xl font-semibold bg-black p-2 rounded-3xl text-white">
        Kraya.
      </div>
      <div className="flex items-center space-x-4">
        {[FiHome, FiUser, FiMessageSquare, FiSettings, FiPower].map((Icon, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${
              activeIndex === index ? "bg-yellow-500 text-black" : "bg-black text-gray-400 hover:bg-gray-600"
            }`}
          >
            <Icon className={`text-xl ${activeIndex === index ? "text-black" : "text-gray-400"}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
