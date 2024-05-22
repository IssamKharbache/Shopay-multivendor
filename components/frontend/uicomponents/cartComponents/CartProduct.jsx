"use client";
import Image from "next/image";
import React from "react";

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
  //increase qty
  const handleQtyIncrement = (cartId) => {
    dispatch(incrementQty(cartId));
  };
  //decrease qty
  const handleQtyDecrement = (cartId) => {
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
          className="object-cover rounded-lg w-24 h-24"
        />

        <p className=" text-md md:text-lg font-semibold text-center md:text-start w-48 line-clamp-1">
          {cartItem.title}
        </p>
      </div>
      {/* QTY ADJUSTMENT */}
      <div className="pt-4 col-span-3 md:col-span-3">
        <div className="flex">
          <div className="flex gap-4 rounded border border-gray-300 dark:border-slate-700 items-center">
            <button
              className="border-r-[1px] border-gray-300 dark:border-slate-700 py-2 px-2 md:px-3 md:py-4"
              onClick={() => handleQtyDecrement(cartItem.id)}
            >
              <FiMinus size={20} />
            </button>
            <p className="flex-grow  px-8 ">{cartItem.qty}</p>
            <button
              className="border-l-[1px] border-gray-300 dark:border-slate-700 py-2 px-2 md:px-3 md:py-4"
              onClick={() => handleQtyIncrement(cartItem.id)}
            >
              <GoPlus size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* price and delete for mobile */}
      <div className="md:hidden flex  items-center gap-2 mt-28">
        <p className="text-xl md:text-2xl  font-semibold">
          {cartItem.salePrice * cartItem.qty}$
        </p>
        <button onClick={() => handleCartItemDelete(cartItem.id)}>
          <IoTrashOutline className="text-red-500 text-lg hover:scale-110 duration-200" />
        </button>
      </div>

      {/* price */}
      <div className="md:flex hidden  md:justify-end col-span-5 md:col-span-2 items-center gap-4">
        <p className="text-3xl md:text-2xl   font-semibold">
          {cartItem.salePrice * cartItem.qty}$
        </p>
        <button onClick={() => handleCartItemDelete(cartItem.id)}>
          <IoTrashOutline className="text-red-500 text-lg hover:scale-110 duration-200" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
