"use client";
import BreadCrumbs from "@/components/frontend/uicomponents/BreadCrumbs";
import CartItems from "@/components/frontend/uicomponents/cartComponents/CartItems";

import CartSubTotal from "@/components/frontend/uicomponents/cartComponents/CartSubTotal";

import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  const subTotal =
    cartItems
      .reduce((acc, currentItem) => {
        return acc + currentItem.salePrice * currentItem.qty;
      }, 0)
      .toFixed(2) ?? 0;

  return (
    <div className="px-7">
      <BreadCrumbs />
      <div className="lg:grid lg:grid-cols-12 flex flex-col gap-6">
        <CartItems cartItems={cartItems} />
        {cartItems.length > 0 ? <CartSubTotal subTotal={subTotal} /> : ""}
      </div>
    </div>
  );
};

export default Cart;
