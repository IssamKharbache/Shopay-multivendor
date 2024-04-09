import React from "react";
import SingleLargCard from "./SingleLargCard";

const LargeCards = () => {
  const ordersStats = [
    {
      time: "Today orders",
      sells: 522,
      color: "bg-blue-600",
    },
    {
      time: "Yesterday orders",
      sells: 250,
      color: "bg-green-800",
    },
    {
      time: "This month orders",
      sells: 15000,
      color: "bg-orange-400",
    },
    {
      time: "All orders",
      sells: 150000,
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
