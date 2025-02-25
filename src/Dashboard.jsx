import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ColorfulCards from "./components/ColorfulCards";
import InvoiceCard from "./components/InvoiceCard";
import InvoicesPieChart from "./components/InvoicesPieChart";
import StatusCard from "./components/StatusCard";
import TopSellingCard from "./components/TopSellingCard";
import TopIconsNavbar from "./components/TopIconsNavbar";

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
  <>
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      {/* Mobile Top Navbar */}
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      <div className="flex flex-1">
        {/* Sidebar for md and above */}
        <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

        {/* Main Content */}
        <div className="flex flex-col md:flex-row flex-1 p-4 md:p-10 space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Section with Charts */}
          <div className="w-full md:flex-1 space-y-8 mt-8 md:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Invoices Card */}
              <InvoiceCard />

              {/* Top Selling Product Card */}
              <TopSellingCard />
            </div>

            {/* Status Card */}
            <StatusCard />
          </div>

          {/* Right Section */}
          <div className="w-full md:w-80 lg:w-96 space-y-8">
            {/* Top Icons Navbar */}
            <TopIconsNavbar />

            {/* Colorful Cards */}
            <ColorfulCards />

            {/* Invoices Pie Chart */}
            <InvoicesPieChart />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
