import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { FiMoreHorizontal } from "react-icons/fi";

const pieData = [
  { name: "Pending", value: 175, color: "#F59E0B" },
  { name: "Overdue", value: 254, color: "#EF4444" },
  { name: "Essentials", value: 884, color: "#10B981" }
];

// Calculate Total
const totalValue = pieData.reduce((sum, entry) => sum + entry.value, 0);

const InvoicesPieChart = () => {
  return (
    <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg relative">
      <h2 className="text-lg font-semibold text-white">Invoices</h2>
      <button className="absolute top-3 right-6 p-2 bg-black rounded-full">
        <FiMoreHorizontal className="text-white text-xl" />
      </button>
      
      <div className="w-full flex justify-center relative">
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie
              data={pieData}
              innerRadius="65%"
              outerRadius="85%"
              dataKey="value"
              label={false} // Disable default labels
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Custom Text Inside the Pie Chart */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-white text-lg font-semibold">Total</span>
          <br />
          <span className="text-xl text-yellow-400 font-bold">${totalValue}</span>
        </div>
      </div>

      <div className="mt-4 text-gray-300">
        {pieData.map((entry, index) => (
          <div key={index} className="flex justify-between border-b border-gray-600 py-1">
            <li>{entry.name}</li>
            <span className="font-semibold">${entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicesPieChart;
