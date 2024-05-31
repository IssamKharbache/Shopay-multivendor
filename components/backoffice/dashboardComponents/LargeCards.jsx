import React from "react";
import SingleLargCard from "./SingleLargCard";

const LargeCards = ({ sales }) => {
  //getting today,this week,this month dates
  const today = new Date();
  const thisWeekStart = new Date(
    today.getFullYear(),
    today.getMonth,
    today.getDate() - today.getDay()
  );
  const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  //filtering sales => today,this week,this month
  //today
  const todaySales = sales
    .filter((sale) => {
      const saleDate = new Date(sale.createdAt);
      return saleDate.toDateString() === today.toDateString();
    })
    .reduce((acc, sale) => acc + sale.total, 0);
  //week
  const thisWeekSales = sales
    .filter((sale) => {
      const saleDate = new Date(sale.createdAt);
      return saleDate >= thisWeekStart && saleDate <= today;
    })
    .reduce((acc, sale) => acc + sale.total, 0);
  //month
  const thisMonthSales = sales
    .filter((sale) => {
      const saleDate = new Date(sale.createdAt);
      return saleDate >= thisMonthStart <= today;
    })
    .reduce((acc, sale) => acc + sale.total, 0);

  //total sales
  const totalSales = sales.reduce((acc, item) => acc + item.total, 0);

  const ordersStats = [
    {
      time: "Today Sales",
      sales: todaySales,
      color: "bg-blue-600",
    },
    {
      time: "This week Sales",
      sales: thisWeekSales,
      color: "bg-green-800",
    },
    {
      time: "This month Sales",
      sales: thisMonthSales,
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
