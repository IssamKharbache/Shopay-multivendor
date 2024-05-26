import React from "react";
import SingleLargCard from "./SingleLargCard";

const LargeCards = ({ sales }) => {
  const totalSales = sales
    .reduce((acc, item) => acc + item.total, 0)
    .toFixed(2);
  const ordersStats = [
    {
      time: "Total Sales",
      sales: 588,
      color: "bg-blue-600",
    },
    {
      time: "Yesterday orders",
      sales: 250,
      color: "bg-green-800",
    },
    {
      time: "This month orders",
      sales: 15000,
      color: "bg-orange-400",
    },
    {
      time: "All-Time Sales",
      sales: totalSales,
      color: "bg-purple-400",
    },
  ];
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {ordersStats.map((order, i) => {
        return <SingleLargCard key={i} data={order} />;
      })}
    </div>
  );
};

export default LargeCards;
