import React from "react";
import CartProduct from "./CartProduct";
import EmptyCart from "./EmptyCart";

const CartItems = ({ cartItems }) => {
  return (
    <div className={`${cartItems.length ? "col-span-8" : "col-span-12"} px-4`}>
      <h2 className="text-4xl mb-6 font-semibold">Your Cart</h2>
      {/* PRODUCT TABLE */}

      {cartItems.length > 0 ? (
        <div className="flex  justify-between border-b border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 uppercase  px-4 pb-4">
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>
      ) : (
        ""
      )}

      {cartItems.length > 0 ? (
        cartItems.map((item, i) => {
          return <CartProduct cartItem={item} key={i} />;
        })
      ) : (
        <EmptyCart />
      )}

      {cartItems.length > 0 ? (
        <div className="gap-4 flex items-center pt-8">
          <input
            type="text"
            className="bg-gray-50 w-96 focus:outline-none border-1 border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-black  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:text-md  py-4"
            placeholder="Enter your coupon code..."
            required
          />
          <button className="bg-blue-400 text-gray-900 hover:bg-blue-500 py-1 md:py-4 rounded-lg px-4 duration-300">
            Apply Coupon
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartItems;
