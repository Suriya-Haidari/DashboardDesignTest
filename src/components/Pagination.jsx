import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <button className="text-gray-400 hover:text-white">Prev</button>
      <div className="flex space-x-2">
        <button className="px-2 py-1 rounded text-white">1</button>
        <button className="px-2 py-1 rounded text-gray-300">2</button>
        <button className="px-2 py-1 rounded text-gray-300">3</button>
        <button className="px-2 py-1 rounded text-gray-300">4</button>
        <button className="px-2 py-1 rounded text-gray-300">5</button>
      </div>
      <button className="text-gray-400 hover:text-white">Next</button>
    </div>
  );
};

export default Pagination;
