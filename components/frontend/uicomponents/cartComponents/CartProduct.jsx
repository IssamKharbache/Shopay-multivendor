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
      position: "bottom-center",
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
    <div className="flex justify-between pt-4 border-b border-gray-300 dark:border-gray-800 pb-6">
      {/* product info */}
      <div className="flex gap-6 items-center">
        <Image
          src={cartItem.imageUrl}
          alt={cartItem.title}
          width={250}
          height={250}
          className="w-20 h-24 object-cover rounded-md"
        />
        <p className="text-lg font-semibold w-48">{cartItem.title}</p>
      </div>
      {/* QTY ADJUSTMENT */}
      <div className="pt-4">
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
      {/* price */}
      <div className="flex items-center gap-4">
        <p className="text-2xl font-semibold">{cartItem.salePrice}$</p>
        <button onClick={() => handleCartItemDelete(cartItem.id)}>
          <IoTrashOutline className="text-red-500 text-lg hover:scale-110 duration-200" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
