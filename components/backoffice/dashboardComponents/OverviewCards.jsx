import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { BsBoxSeamFill } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";
import { PiCoinsLight } from "react-icons/pi";

const OverviewCards = ({ sales, products }) => {
  const productsCount = products.length.toString().padStart(2, "0");
  const salesCount = sales.length.toString().padStart(2, "0");
  const totalSalesAmout = sales.reduce((acc, item) => acc + item.total, 0);
  const analytics = [
    {
      title: "Total Products",
      count: productsCount,
      unit: "",
      link: "/dashboard/products",
      icon: BsBoxSeamFill,
    },
    {
      title: "Total Sales",
      count: salesCount,
      unit: "",
      link: "/dashboard/sales",
      icon: PiCoinsLight,
    },
    {
      title: "Total Revenue",
      count: `$${totalSalesAmout}`,
      unit: "",
      link: "/dashboard/wallet",
      icon: LuCircleDollarSign,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800 dark:text-gray-200">
        {analytics.map((analytic, i) => {
          const Icon = analytic.icon;
          return (
            <div
              key={i}
              className="flex flex-col gap-8 border border-gray-400 dark:border-gray-600  rounded-md"
            >
              <div className="py-8 px-6">
                <div className="flex justify-between gap-8 py-4 px-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-xl">{analytic.title}</h1>
                    <p className="font-semibold text-xl">{analytic.count}</p>
                  </div>

                  {/* icon  */}
                  <div className="w-16 h-16 flex items-center justify-center  bg-blue-400 dark:bg-slate-700 rounded-full py-4 px-3">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="flex justify-between px-6 py-4 gap-3 items-center dark:hover:bg-slate-800 hover:bg-slate-200 border-t border-gray-400 dark:border-gray-600 duration-200"
              >
                <h1>View More</h1>
                <FaArrowRight />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OverviewCards;
