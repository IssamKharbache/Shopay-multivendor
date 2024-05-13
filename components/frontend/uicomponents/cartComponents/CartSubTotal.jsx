import React from "react";

const CartSubTotal = ({ subTotal }) => {
  const shipping = 10.0;
  const tax = 0.0;
  const totalPrice = (
    Number(subTotal) +
    Number(shipping) +
    Number(tax)
  ).toFixed(2);

  return (
    <div className="col-span-4 bg-gray-950 text-white  rounded-lg shadow-xl  dark:bg-gray-800   overflow-hidden ">
      <div className="p-12 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold pb-3">Cart Total</h2>
        <div className="flex justify-between border-b-[1px] border-b-gray-600 pb-6">
          <h2 className="font-semibold text-lg">Subtotal</h2>
          <h2 className="font-bold">{subTotal}$</h2>
        </div>
        <div className="flex justify-between pt-4">
          <h2 className="font-semibold text-lg">Tax</h2>
          <h2 className="font-bold">{tax}$</h2>
        </div>
        <div className="flex justify-between  pb-6 pt-4">
          <h2 className="font-semibold text-lg">Shipping</h2>
          <h2 className="font-bold">{shipping}$</h2>
        </div>
        <p className="border-b-[1px] border-b-gray-600 pb-5 text-gray-500">
          Shipping is free if your order is less than 2kg
        </p>
        <div className="flex justify-between  pb-6 pt-4">
          <h2 className="font-semibold text-lg">Total</h2>
          <h2 className="font-bold">{totalPrice}$</h2>
        </div>
        <button className="bg-gray-300 font-semibold p-2 md:p-4 rounded-lg text-black hover:bg-gray-500 hover:text-gray-100 duration-200 dark:bg-gray-500 dark:text-white dark:hover:bg-gray-700 ">
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default CartSubTotal;
