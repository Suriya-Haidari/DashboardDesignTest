import React from "react";
import { FiDollarSign, FiClipboard, FiShoppingCart, FiTrendingUp } from "react-icons/fi";

const colors = ["#FEF08A", "#FECACA", "#FDBA74", "#BAE6FD"];

const icons = [
  <FiDollarSign className="text-white" />,
  <FiClipboard className="text-white" />,
  <FiShoppingCart className="text-white" />,
  <FiTrendingUp className="text-white" />
];

const ColorfulCards = () => {
  const cardTitles = ["Spend", "Supplier", "Invoices", "PO processed"];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {cardTitles.map((title, index) => (
        <div key={index} className="p-6 rounded-2xl shadow-lg relative" style={{ backgroundColor: colors[index] }}>
          <button className="absolute -top-3 -right-2 p-2 bg-black rounded-full">
            <div className="p-2 bg-gray-700 rounded-full">{icons[index]}</div>
          </button>
          <h3 className="text-gray-800 font-semibold">{title}</h3>
          <p className="text-xl font-bold text-black">{index === 0 ? "$123,456" : "12"}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorfulCards;
