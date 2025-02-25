import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";

const invoiceData = [
  { name: "05 Jul", quotation: 30, approval: 20 },
  { name: "06 Jul", quotation: 40, approval: 30 },
  { name: "07 Jul", quotation: 50, approval: 40 },
  { name: "08 Jul", quotation: 60, approval: 50 },
  { name: "09 Jul", quotation: 70, approval: 60 },
  { name: "10 Jul", quotation: 80, approval: 70 },
  { name: "11 Jul", quotation: 90, approval: 80 }
];

const InvoiceCard = () => {
  return (
    <div className="p-6 bg-neutral-800 rounded-2xl shadow-lg relative">
      <h2 className="text-lg font-semibold mb-4 text-white">Invoices</h2>
      <button className="absolute top-3 right-6 p-2 border border-gray-300 rounded-full">
        <FiMoreHorizontal className="text-white text-xl" />
      </button>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={invoiceData}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            cursor={{ fill: "#2D3748" }}
            contentStyle={{ backgroundColor: "#1A202C", borderColor: "#4A5568" }}
          />
          <Bar dataKey="quotation" fill="#F59E0B" radius={[4, 4, 0, 0]} />
          <Bar dataKey="approval" fill="#10B981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <button className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-6 p-2 md:p-4 bg-black rounded-full">
        <div className="p-1 md:p-2 bg-yellow-500 rounded-full">
          <FiSearch className="text-white text-lg md:text-xl" />
        </div>
      </button>
    </div>
  );
};

export default InvoiceCard;
