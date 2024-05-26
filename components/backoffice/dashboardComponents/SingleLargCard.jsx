import React from "react";
import { CiShoppingBasket } from "react-icons/ci";

const SingleLargCard = ({ data }) => {
  return (
    <div
      className={`${data.color} rounded-lg text-white font-semibold  shadow-md p-8 flex items-center flex-col gap-2 `}
    >
      <CiShoppingBasket size={25} />
      <h4>{data.time}</h4>
      <h2 className="lg:text-3xl text-xl">${data.sales}</h2>
    </div>
  );
};

export default SingleLargCard;
