import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesSideBar = async () => {
  const categoriesData = await getData("categories");
  const categories = categoriesData.filter(
    (category) => category?.products?.length > 0
  );
  return (
    <div className="sm:col-span-3  bg-gray-200 border border-gray-200 rounded-lg shadow-xl  dark:bg-gray-800 dark:border-gray-700  overflow-hidden hidden xl:block">
      <h2 className="bg-slate-300 text-gray-900 px-2 py-4  dark:bg-slate-700 dark:text-gray-200 font-semibold text-center  border-b-[7px] border-blue-300 dark:border-blue-800">
        Shop By Categories
      </h2>
      <div className="px-4 py-5 h-[330px] overflow-y-auto ">
        {categories?.length > 0 &&
          categories?.map((category, i) => {
            return (
              <Link
                key={i}
                href={`/category/${category.slug}`}
                className="flex hover:bg-gray-300 items-center gap-6 dark:hover:bg-gray-700 p-4 rounded-lg duration-200 transition-all"
              >
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  height={150}
                  width={150}
                  className="w-10 h-10 rounded-full object-cover  "
                />
                <span className="text-lg font-semibold">{category.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default CategoriesSideBar;
