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
    <div className="flex flex-col  gap-8 py-6 mb-6 md:px-4 xl:px-0">
      {/* CAROUSEL */}
      <div className="rounded-md  w-full  mx-auto">
        <HeroCarousel banners={banners} />
      </div>
      {/* FIRST */}
      <CategoriesSideBar />
    </div>
  );
};

export default Hero;
