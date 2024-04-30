import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "./HeroCarousel";
//ICONS
import { BiHelpCircle } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";

import ad from "@/public/ad.gif";
import CategoriesSideBar from "./CategoriesSideBar";
import { getData } from "@/lib/getData";

const Hero = async () => {
  const banners = await getData("banners");
  return (
    <div className="grid grid-cols-12  gap-8 py-6 mb-6 md:px-4 xl:px-0">
      {/* FIRST */}
      <CategoriesSideBar />
      {/* CAROUSEL */}
      <div className="rounded-md col-span-full lg:col-span-9 xl:col-span-7">
        <HeroCarousel banners={banners} />
      </div>
      {/* THIRD MENU */}
      <div className="col-span-3 hidden lg:flex items-center justify-center  p-3 rounded-lg dark:bg-slate-900 bg-slate-200 shadow-xl   xl:col-span-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <Link href="#" className="flex items-center  gap-2">
              <BiHelpCircle className="shrink-0 w-8 h-8 bg-blue-400 rounded-full p-1 text-white" />
              <div className="flex flex-col text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 duration-200 ">
                <h1 className="uppercase text-lg font-semibold">Help center</h1>
                <p className="text-[0.7rem] ">Customer Care </p>
              </div>
            </Link>
            <Link href="#" className="flex items-center  gap-2">
              <TbTruckReturn className="shrink-0 w-8 h-8 bg-blue-400 rounded-full p-1 text-white" />
              <div className="flex flex-col text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 duration-200 ">
                <h1 className="uppercase text-lg font-semibold ">
                  Easy Return
                </h1>
                <p className="text-[0.8rem] ">Quick Refund</p>
              </div>
            </Link>{" "}
            <Link href="/register-farmer" className="flex items-center gap-2">
              <FaHandshake className="shrink-0 w-8 h-8 bg-blue-400 rounded-full p-1 text-white" />
              <div className="flex flex-col text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 duration-200  ">
                <h1 className="uppercase text-lg font-semibold ">
                  Sell with us
                </h1>
                <p className="text-[0.8rem] ">Gain Money Selling</p>
              </div>
            </Link>
          </div>
          <Image
            src={ad}
            className="w-full  h-44 rounded-md"
            alt="ADS"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
