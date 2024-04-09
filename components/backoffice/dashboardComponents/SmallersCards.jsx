import React from "react";
//card component
import SingleSmallCard from "./SingleSmallCard";
//cards icons
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";

const SmallersCards = () => {
  const ordersStats = [
    {
      title: "Today orders",
      orders: 60,
      iconBg: "bg-orange-500 dark:bg-orange-600  text-white text-xl",
      icon: <IoCart />,
    },
    {
      title: "Orders pending",
      orders: 30,
      iconBg: "bg-blue-400 dark:bg-blue-600 text-white text-xl",
      icon: <MdOutlinePendingActions />,
    },
    {
      title: "Orders processing",
      orders: 25,
      iconBg: "bg-blue-300 dark:bg-blue-400 text-white text-xl",
      icon: <PiArrowsCounterClockwiseBold />,
    },
    {
      title: "Orders delivered",
      orders: 5,
      iconBg: "bg-green-600 dark:bg-green-700 text-white text-xl",
      icon: <FaCheck />,
    },
  ];
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {ordersStats.map((orders, i) => {
        return <SingleSmallCard key={i} data={orders} />;
      })}
    </div>
  );
};

export default SmallersCards;
