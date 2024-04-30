import Image from "next/image";
import React from "react";
//COMPONENT
import CategoryCarousel from "@/components/frontend/uicomponents/carousels/CategoryCarousel";
import BreadCrumbs from "@/components/frontend/uicomponents/BreadCrumbs";

//LIB
import { getData } from "@/lib/getData";

//ICONS
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";
import IncDecQuantity from "@/components/frontend/uicomponents/IncDecQuantity";
const SingleProductDetail = async ({ params: { slug } }) => {
  const category = await getData("/categories/662a151ceb51053c7101b9db");
  return (
    <div>
      {/* crumbs */}
      <BreadCrumbs />
      {/* Product */}
      <div className=" py-6 px-6 rounded-md">
        <div className="grid  grid-cols-12 gap-8">
          {/* PICTURE */}
          <div className="col-span-3">
            <Image
              src="/natur1.jpg"
              alt="Product"
              width={312}
              height={320}
              className="w-full rounded-sm"
            />
          </div>
          {/* PRODUCT INFORMATION */}
          <div className="col-span-6">
            {/* title and share */}
            <div className="flex items-center justify-between  ">
              <h2 className="text-md lg:text-3xl font-semibold">Vitamin C</h2>
              <button>
                <IoShareSocialOutline className="w-8 h-8" />
              </button>
            </div>
            {/* description */}
            <div className="border-b-[1px] border-b-gray-300 dark:border-b-slate-800 ">
              {/* descr */}
              <p className="py-2  ">
                The breadcrumb component is an important part of any website or
                application that can be used to show the current location of a
                page in a hierarchical structure of pages.
              </p>
              {/* sku */}
              <div className="flex items-center gap-2 mb-6">
                <p className="flex">
                  <span className="font-semibold text-blue-400">SKU </span>:
                  4578477
                </p>
                <div className="flex gap-2 bg-gray-700 rounded-full  text-white px-3 py-1">
                  <p>Stock :</p>
                  <p className="font-semibold text-green-400 ">502</p>
                </div>
              </div>
            </div>
            {/* price info */}
            <div className="flex flex-col  pt-4  ">
              <p className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                <MdOutlineDiscount className="w-4 h-4" />
                <span>Save up to 50% right now</span>
              </p>
              <div className="flex items-center gap-2 pt-2 pb-4 border-b-[1px] border-b-gray-300 dark:border-b-slate-800 ">
                <h4 className="text-green-600 dark:text-green-400  text-4xl    rounded-lg">
                  45.99$
                </h4>
                <del className="text-red-500 dark:text-red-400 justify-end  rounded-lg   opacity-80 text-xl font-semibold">
                  58.00$
                </del>
              </div>
            </div>
            {/* add quantity and add to cart */}
            <div className="py-4 flex justify-between">
              <IncDecQuantity />
              {/* add to cart */}
              <button className="rounded-md relative w-36 h-12 cursor-pointer flex items-center  bg-blue-400 group   active:bg-blue-400  dark:bg-slate-500">
                <span className="text-gray-200 font-semibold ml-2 transform group-hover:translate-x-5 transition-all rounded-md duration-300">
                  Add To Cart
                </span>
                <span className="absolute right-0 h-md w-8 rounded-md bg-blue-400 dark:bg-slate-500  flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                  <GoPlus className="w-6 h-6 text-white" />
                </span>
              </button>
            </div>
          </div>
          {/* DELIVERY INFO */}
          <div className="sm:block col-span-3 bg-gray-200 border border-gray-200 rounded-lg shadow-xl  dark:bg-gray-800 dark:border-gray-700  overflow-hidden hidden">
            <h2 className="bg-slate-300 text-gray-900 px-2 py-4 dark:bg-slate-700 dark:text-gray-200 font-semibold text-center  border-b-[7px] border-blue-300 dark:border-blue-800">
              DELIVERY & RETURNS
            </h2>
            <div className="p-4">
              <div className="flex flex-col   mt-1">
                <div className="flex items-center justify-center bg-blue-400 rounded-md py-2 px-1 gap-3 text-white ">
                  <span>Shopay Express</span>
                  <FaPaperPlane />
                </div>

                <div className="py-3 text-sm border-b-[1px] border-b-gray-300 dark:border-b-slate-800">
                  <p> Free Delivery Available.</p>

                  <Link
                    href="#"
                    className="text-blue-400 underline hover:text-blue-500 "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related products */}
      <div className="p-2 bg-slate-200 dark:bg-slate-900 rounded-md mt-8">
        <h2 className="text-2xl text-center sm:text-left p-4 font-semibold ml-3">
          Related Products
        </h2>
        <CategoryCarousel products={category.products} />
      </div>
    </div>
  );
};

export default SingleProductDetail;
