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
    <div className="bg-slate-200 dark:bg-slate-800 rounded-lg ">
      <h1 className="text-center text-4xl font-semibold mb-2 mt-8">
        Our categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto xl:grid-cols-6 p-12 gap-6 ">
        {categories.map((category, idx) => {
          return (
            <div
              key={idx}
              className=" border-b border-b-gray-300 dark:border-gray-500 p-4"
            >
              <Link
                className="hover:scale-110 duration-300 flex flex-col items-center gap-6"
                href={`category/${category.slug}`}
              >
                <Image
                  src={category.imageUrl}
                  width={750}
                  height={750}
                  alt={category.title}
                  className="w-36 h-36 object-cover rounded-md "
                />

                <h1 className="text-md font-bold">{category.title}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSideBar;
