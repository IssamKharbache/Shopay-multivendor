"use client";
import { addToCart } from "@/redux/slices/cartSlice";
import React from "react";
import { GoPlus } from "react-icons/go";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const AddToCartBtn = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // dispatch the reducer
    dispatch(addToCart(product));
    toast.success("Item added successfully", {
      position: "bottom-center",
    });
  };
  return (
    <div className="py-4 flex justify-between">
      {/* add to cart */}
      <button
        onClick={() => handleAddToCart()}
        className="rounded-md relative w-36 h-12 cursor-pointer flex items-center  bg-blue-400 group   active:bg-blue-400  dark:bg-slate-500"
      >
        <span className="text-gray-200 font-semibold ml-2 transform group-hover:translate-x-5 transition-all rounded-md duration-300">
          Add To Cart
        </span>
        <span className="absolute right-0 h-md w-8 rounded-md bg-blue-400 dark:bg-slate-500  flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
          <GoPlus className="w-6 h-6 text-white" />
        </span>
      </button>
    </div>
  );
};

export default AddToCartBtn;
