import React, { useState } from "react";
import { FiHome, FiUser, FiMessageSquare, FiSettings, FiPower, FiArrowLeft } from "react-icons/fi";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Home is active by default

  return (
    <div className="hidden md:flex flex-col w-20 bg-neutral-600 items-center py-4 space-y-6 rounded-r-xl border-r border-gray-500">
      <div className="text-2xl ml-16 font-bold bg-black p-6 rounded-3xl text-white">
        Kraya.<br /><br />
        <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-black transition-all">
          <FiArrowLeft className="text-xl" />
        </button>
      </div>

      <div className="flex flex-col bg-black p-2 rounded-2xl items-center space-y-6">
        {[FiHome, FiUser, FiMessageSquare, FiSettings, FiPower].map((Icon, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all ${
              activeIndex === index ? "bg-yellow-500 text-black" : "bg-black text-gray-400 hover:bg-gray-600"
            }`}
          >
            <Icon className={`text-xl ${activeIndex === index ? "text-black" : "text-gray-400"}`} />
          </button>
        ))}
      </div>

      {/* Small Image Below Sidebar */}
      <img 
        src="./imahe..png" 
        alt="Flower" 
        className="w-12 h-12 rounded-lg object-cover mt-4" 
      />
    </div>
  );
};

export default Sidebar;
