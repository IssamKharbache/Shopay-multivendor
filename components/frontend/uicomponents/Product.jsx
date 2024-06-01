"use client";
import { addToCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoPlus } from "react-icons/go";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // dispatch the reducer
    dispatch(addToCart(product));
    toast.success("Item added successfully", {
      position: "bottom-center",
    });
  };
  return (
    <div className="rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800 shadow-lg p-10 flex flex-col items-center gap-2 duration-200 group/img">
      <Link href={`/products/${product.slug}`}>
        <Image
          src={product.imageUrl}
          width={1200}
          height={686}
          className="w-64 h-48 rounded-md object-cover duration-300 group-hover/img:scale-105"
          alt={product.title}
        />
      </Link>

      <Link href={`/products/${product.slug}`}>
        <h2 className="text-gray-900 dark:text-slate-100  text-center font-semibold rounded-b-md line-clamp-1">
          {product.title}
        </h2>
      </Link>
      <div className="flex space-x-8 flex-col items-center">
        <div>
          <p className="font-semibold">{product.salePrice} $</p>
          <p className="line-through text-center  text-red-500">
            {product.productPrice}$
          </p>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart()}
        className="rounded-md relative w-36 h-10 cursor-pointer flex items-center  bg-blue-400 group   active:bg-blue-400  dark:bg-slate-500"
      >
        <span className="text-gray-200 font-semibold ml-2 transform group-hover:translate-x-5 transition-all duration-300">
          Add To Cart
        </span>
        <span className="absolute right-0 h-full w-8 rounded-lg bg-blue-400 dark:bg-slate-500  flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
          <GoPlus className="w-6 h-6 text-white" />
        </span>
      </button>
    </div>
  );
};

export default Product;
