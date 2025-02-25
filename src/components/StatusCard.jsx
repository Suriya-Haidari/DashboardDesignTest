import React from "react";
import Pagination from "./Pagination";
import { FiDownload } from "react-icons/fi";

const statusData = [
  {
    id: "KYRF00001",
    vendor: "Bell Gardens",
    status: "Approved",
    ApplyData: "3/3/2023",
    Contact: "+91 123 456 789"
  },
  {
    id: "KYRF00002",
    vendor: "Bell Gardens",
    status: "Pending",
    ApplyData: "3/3/2023",
    Contact: "+91 123 456 789"
  }
];

const StatusCard = () => {
  return (
    <div className="bg-neutral-800 p-4 md:p-6 rounded-2xl shadow-lg relative overflow-x-auto">
      <h2 className="text-lg font-semibold text-white">Status</h2>
      {/* Download Button at Top Right */}
      <button className="absolute top-3 right-3 md:top-3 md:right-6 border border-gray-400 px-2 md:px-3 py-1 md:py-2 flex items-center justify-center rounded-md text-gray-400 text-xs md:text-sm font-medium">
        Download <FiDownload className="ml-1 md:ml-2" />
      </button>
      <table className="w-full mt-4 text-left text-xs md:text-sm">
        <thead>
          <tr>
            <th className="pb-2 text-gray-400">RFQ ID</th>
            <th className="pb-2 text-gray-400">Vendor</th>
            <th className="pb-2 text-gray-400">Vendor Contact</th>
            <th className="pb-2 text-gray-400">Apply Data</th>
            <th className="pb-2 text-gray-400">Status</th>
          </tr>
        </thead>
        <tbody>
          {statusData.map((row, index) => (
            <tr key={index} className="border-t border-gray-600">
              <td className="py-2 text-white">{row.id}</td>
              <td className="py-2 text-gray-400">{row.vendor}</td>
              <td className="py-2 text-gray-400">{row.Contact}</td>
              <td className="py-2 text-gray-400">{row.ApplyData}</td>
              <td className="py-2">
                <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${
                  row.status === "Approved" ? "bg-green-500" : "bg-red-500"
                }`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Import and Use Pagination Component */}
      <Pagination />
    </div>
  );
};

export default StatusCard;
