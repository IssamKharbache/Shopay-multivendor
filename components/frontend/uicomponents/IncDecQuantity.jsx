"use client";
import { decrementQty, incrementQty } from "@/redux/slices/cartSlice";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

const IncDecQuantity = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);
  //increase qty
  const handleQtyIncrement = (cartId) => {
    dispatch(incrementQty(cartId));
  };
  //decrease qty
  const handleQtyDecrement = (cartId) => {
    dispatch(decrementQty(cartId));
  };
  return (
    <div className="flex">
      <div className="flex gap-4 rounded border border-gray-300 dark:border-slate-700 items-center">
        <button className="border-r-[1px] border-gray-300 dark:border-slate-700 px-3 py-4">
          <FiMinus size={20} />
        </button>
        <p className="flex-grow  px-8 ">1</p>
        <button className="border-l-[1px] border-gray-300 dark:border-slate-700  px-3 py-4">
          <GoPlus size={20} />
        </button>
      </div>
    </div>
  );
};

export default IncDecQuantity;
