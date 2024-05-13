import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[700px]">
      <div>
        <Image width={450} height={450} alt="Empty cart" src="/emptyCart.png" />
      </div>
      <div className="flex flex-col items-center justify-center  gap-8 ">
        <p className="text-4xl  font-semibold">Your cart is empty</p>
        <p>Looks like you added nothing to your cart</p>

        <Link
          href="/"
          className="bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-700 duration-200 md:text-xl"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
