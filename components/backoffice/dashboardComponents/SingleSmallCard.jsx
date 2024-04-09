import React from "react";
import { IoCart } from "react-icons/io5";

const SingleSmallCard = ({ data }) => {
  return (
    <div className="rounded-lg shadow-lg bg-gray-100 dark:bg-slate-600 p-4 ">
      {/*  */}
      <div className="flex space-x-8">
        <div
          className={`${data.iconBg} w-12 h-12  
         rounded-full flex items-center justify-center`}
        >
          {data.icon}
        </div>

        <div className="text-gray-700 dark:text-gray-200 ">
          <p>{data.title}</p>
          <h3 className="text-2xl font-semibold">{data.orders}</h3>
        </div>
      </div>
    </div>
  );
};

export default SingleSmallCard;
