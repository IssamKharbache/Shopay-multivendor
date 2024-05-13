"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const CartCount = () => {
  const cartItems = useSelector((store) => store.cart);
  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
    >
      <AiOutlineShoppingCart
        size={25}
        className="text-blue-600 hover:text-blue-900 dark:text-gray-200 dark:hover:text-gray-400  duration-200"
      />
      <span className="sr-only">Cart</span>
      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
        {cartItems.length}
      </div>
    </Link>
  );
};

export default CartCount;
