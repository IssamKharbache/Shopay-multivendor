import BreadCrumbs from "@/components/frontend/uicomponents/BreadCrumbs";
import IncDecQuantity from "@/components/frontend/uicomponents/IncDecQuantity";
import Image from "next/image";
import React from "react";
import { IoTrashOutline } from "react-icons/io5";
const Cart = () => {
  return (
    <div>
      <BreadCrumbs />
      <div className="lg:grid lg:grid-cols-12 flex flex-col">
        <div className="col-span-8 px-4">
          <h2 className="text-4xl mb-6 font-semibold">Your Cart</h2>
          {/* PRODUCT TABLE */}
          <div className="">
            <table
              className="w-full
               text-left text-sm text-gray-500"
            >
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-500 uppercase"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 uppercase"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6  py-4 font-medium text-gray-500 dark:text-gray-600 uppercase"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-gray-100  border-gray-300 border-t-[1px] dark:border-gray-600">
                <tr className=" text-gray-800 dark:text-gray-300">
                  <div className="flex gap-8 py-4 font-medium">
                    <Image
                      src="/natur1.jpg"
                      alt="Product"
                      width={312}
                      height={320}
                      className="w-24 h-24 rounded-sm"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-2xl">Product Title</h1>
                      <p>Golden</p>
                    </div>
                  </div>
                  <td className="px-6 py-4">
                    <IncDecQuantity />
                  </td>
                  <td className="font-medium">
                    <div className="flex gap-8 items-center ">
                      <p className="text-xl font-semibold">55$</p>
                      <button type="button">
                        <IoTrashOutline className="text-red-500 text-xl hover:scale-110 duration-200" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <form className="flex gap-3 pt-8">
            <div>
              <input
                type="text"
                className="bg-gray-50 focus:outline-none border-1 border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-black  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white px-8 py-4"
                placeholder="Enter your coupon code"
                required
              />
            </div>
            <button className="bg-gray-700 text-white dark:bg-slate-600  hover:opacity-80 px-4 rounded-lg duration-200 font-semibold ">
              Apply Coupon
            </button>
          </form>
        </div>
        {/* CHECKOUT */}
        <div className="col-span-4 bg-gray-950 text-white  rounded-lg shadow-xl  dark:bg-gray-800   overflow-hidden ">
          <div className="p-12 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold pb-3">Cart Total</h2>
            <div className="flex justify-between border-b-[1px] border-b-gray-600 pb-6">
              <h2 className="font-semibold text-lg">Subtotal</h2>
              <h2 className="font-bold">584$</h2>
            </div>
            <div className="flex justify-between pt-4">
              <h2 className="font-semibold text-lg">Tax</h2>
              <h2 className="font-bold">0$</h2>
            </div>
            <div className="flex justify-between  pb-6 pt-4">
              <h2 className="font-semibold text-lg">Shipping</h2>
              <h2 className="font-bold">25$</h2>
            </div>
            <p className="border-b-[1px] border-b-gray-600 pb-5 text-gray-500">
              Shipping is free if your order is less than 2kg
            </p>
            <div className="flex justify-between  pb-6 pt-4">
              <h2 className="font-semibold text-lg">Total</h2>
              <h2 className="font-bold">780$</h2>
            </div>
            <button className="bg-gray-300 font-semibold p-2 md:p-4 rounded-lg text-black hover:bg-gray-500 hover:text-gray-100 duration-200 dark:bg-gray-500 dark:text-white dark:hover:bg-gray-700 ">
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
