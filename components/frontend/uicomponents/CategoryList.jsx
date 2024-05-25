import Link from "next/link";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import CategoryCarousel from "./carousels/CategoryCarousel";

const CategoryList = ({ category, isMarketPage }) => {
  return (
    <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow-xl  dark:bg-gray-800 dark:border-gray-700  overflow-hidden ">
      <div className="flex justify-between items-center bg-slate-300 text-gray-900 px-8 py-4  dark:bg-slate-800 dark:text-gray-200 font-semibold text-center ">
        <h2>{category.title}</h2>
        <Link
          href={`/category/${category.slug}`}
          className="flex items-center  gap-2 bg-blue-400 text-white hover:bg-blue-600  dark:bg-blue-600 dark:hover:bg-blue-800 dark:text-gray-200 rounded-lg p-2 duration-200"
        >
          See All
          <HiOutlineExternalLink />
        </Link>
      </div>
      <CategoryCarousel
        isMarketPage={isMarketPage}
        className="md:p-2 bg-slate-200 dark:bg-slate-900 rounded-b-lg"
        products={category.products}
      />
    </div>
  );
};

export default CategoryList;
