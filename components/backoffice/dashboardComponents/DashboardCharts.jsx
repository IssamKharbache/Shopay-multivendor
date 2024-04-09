"use client";
import React, { useState } from "react";
import WeeklySellChart from "./WeeklySellChart";
import BestSPChart from "./BestSPChart";

const DashboardCharts = () => {
  const [chartSelect, setChartSelect] = useState("weekly");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 font-poppins gap-4 ">
      {/* WEEKLY SALES CHART */}
      <WeeklySellChart />
      {/* BEST SELLING PRODUCTS CHART */}
      <BestSPChart />
    </div>
  );
};

export default DashboardCharts;
