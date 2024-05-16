"use client";
import Image from "next/image";
import React from "react";
import IncDecQuantity from "../IncDecQuantity";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { toast } from "sonner";

const CartProduct = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleCartItemDelete = (cartId) => {
    //dispatch delete slice
    dispatch(removeFromCart(cartId));
    toast.success("Item removed from cart", {
      position: "top-center",
    });
  };
  const handleQtyIncrement = (cartId) => {
    //dispatch delete slice
    dispatch(incrementQty(cartId));
  };
  const handleQtyDecrement = (cartId) => {
    //dispatch delete slice
    dispatch(decrementQty(cartId));
  };
  return (
    <div className="grid grid-cols-10 md:flex-row gap-6 justify-between pt-4 border-b border-gray-300 dark:border-gray-800 pb-6">
      {/* product info */}
      <div className="flex flex-col md:flex-row justify-center col-span-4 md:col-span-5 gap-6 items-center">
        <Image
          src={cartItem.imageUrl}
          alt={cartItem.title}
          width={250}
          height={250}
          className="w-20 h-24 object-contain dark:object-cover rounded-md"
        />

        <p className="text-lg font-semibold text-center md:text-start w-48 line-clamp-1">
          {cartItem.title}
        </p>
      </div>
      {/* QTY ADJUSTMENT */}
      <div className="pt-4 col-span-3 md:col-span-3">
        <div className="flex">
          <div className="flex gap-4 rounded border border-gray-300 dark:border-slate-700 items-center">
            <button
              className="border-r-[1px] border-gray-300 dark:border-slate-700 px-3 py-4"
              onClick={() => handleQtyDecrement(cartItem.id)}
            >
              <FiMinus size={20} />
            </button>
            <p className="flex-grow  px-8 ">{cartItem.qty}</p>
            <button
              className="border-l-[1px] border-gray-300 dark:border-slate-700  px-3 py-4"
              onClick={() => handleQtyIncrement(cartItem.id)}
            >
              <GoPlus size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* price and delete for mobile */}
      <div className="md:hidden flex  items-center gap-2 mt-28">
        <p className="text-3xl md:text-2xl  font-semibold">
          {cartItem.salePrice}$
        </p>
        <button onClick={() => handleCartItemDelete(cartItem.id)}>
          <IoTrashOutline className="text-red-500 text-lg hover:scale-110 duration-200" />
        </button>
      </div>

      {/* price */}
      <div className="md:flex hidden  md:justify-end col-span-5 md:col-span-2 items-center gap-4">
        <p className="text-3xl md:text-2xl   font-semibold">
          {cartItem.salePrice}$
        </p>
        <button onClick={() => handleCartItemDelete(cartItem.id)}>
          <IoTrashOutline className="text-red-500 text-lg hover:scale-110 duration-200" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
