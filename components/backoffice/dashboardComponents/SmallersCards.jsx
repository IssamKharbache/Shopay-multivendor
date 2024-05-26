import React from "react";
//card component
import SingleSmallCard from "./SingleSmallCard";
//cards icons
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
const SmallersCards = ({ orders }) => {
  const orderStatus = {
    pending: "PENDING",
    processing: "PROCESSING",
    delivering: "DELIVERED",
    shipping: "SHIPPED",
    cancelled: "CANCELLED",
  };
  const getOrdersCountByStatus = (status) => {
    const filteredOrders = orders.filter(
      (order) => order.orderStatus === status
    );
    const count = filteredOrders.length.toString().padStart(2, "0");
    return count;
  };
  const pendingOrdersCount = getOrdersCountByStatus(orderStatus.pending);
  const processedOrdersCount = getOrdersCountByStatus(orderStatus.processing);
  const deliveringOrdersCount = getOrdersCountByStatus(orderStatus.delivering);
  const shippedOrdersCount = getOrdersCountByStatus(orderStatus.shipping);
  const cancelledOrdersCount = getOrdersCountByStatus(orderStatus.cancelled);
  const ordersStats = [
    {
      title: "Total Orders",
      orders: orders.length.toString().padStart(2, "0"),
      iconBg: "bg-slate-500 dark:bg-slate-900  text-white text-xl",
      icon: <IoCart />,
    },
    {
      title: "Orders Pending",
      orders: pendingOrdersCount,
      iconBg: "bg-blue-400 dark:bg-blue-600 text-white text-xl",
      icon: <MdOutlinePendingActions />,
    },
    {
      title: "Orders Processing",
      orders: processedOrdersCount,
      iconBg: "bg-blue-300 dark:bg-blue-400 text-white text-xl",
      icon: <PiArrowsCounterClockwiseBold />,
    },
    {
      title: "Orders Shipped",
      orders: shippedOrdersCount,
      iconBg: "bg-green-600 dark:bg-green-700 text-white text-xl",
      icon: <FaShippingFast />,
    },
    {
      title: "Orders delivered",
      orders: deliveringOrdersCount,
      iconBg: "bg-green-600 dark:bg-green-700 text-white text-xl",
      icon: <FaCheck />,
    },
    {
      title: "Orders Cancelled",
      orders: cancelledOrdersCount,
      iconBg: "bg-red-500 dark:bg-red-500 text-white text-xl",
      icon: <MdOutlineDoNotDisturb />,
    },
  ];
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-4 py-8">
      {ordersStats.map((orders, i) => {
        return <SingleSmallCard key={i} data={orders} />;
      })}
    </div>
  );
};

export default SmallersCards;
