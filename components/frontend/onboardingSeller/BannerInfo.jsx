"use client";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const BannerInfo = () => {
  const cartItems = useSelector((store) => store.cart);
  const subTotal =
    cartItems
      .reduce((acc, currentItem) => {
        return acc + currentItem.salePrice * currentItem.qty;
      }, 0)
      .toFixed(2) ?? 0;
  return (
    <div className="bg-slate-300 dark:bg-gray-600 rounded-xl">
      <div className="p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center flex-1">
            <div className="inline-flex items-center justify-center flex-shrink-0 bg-gray-400 rounded-full w-9 h-9 text-gray-50">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <p className="ml-3 text-base font-normal text-gray-900 dark:text-gray-100">
              You have {cartItems?.length} items in cart. Sub total is{" "}
              <span className="font-bold  text-xl">${subTotal}</span>
            </p>
          </div>

          <div className="mt-4 sm:mt-0">
            <Link
              href="/cart"
              className="inline-flex items-center px-4 py-2 text-sm font-bold bg-gray-50 border border-gray-300  text-gray-600 transition-all  duration-200   rounded-md dark:text-gray-900 dark:bg-gray-400 dark:hover:bg-gray-300  hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-offset-2 focus:ring-gray-500"
            >
              Edit cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;
