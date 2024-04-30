"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MarketCarousel = ({ markets }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      containerClass="bg-slate-200 dark:bg-slate-900 rounded-b-lg md:p-2"
      removeArrowOnDeviceType={["mobile"]}
      dotListClass="text-red-800"
      itemClass="p-8"
    >
      {markets.map((market, index) => {
        return (
          <Link
            href="#"
            className="flex items-center flex-col gap-2"
            key={index}
          >
            <Image
              src={market.logoUrl}
              width={1200}
              height={686}
              className="h-48 w-48 rounded-full"
              alt={market.name}
            />
            <h2 className="text-gray-900 dark:text-slate-100 p-2 text-center font-semibold rounded-b-md">
              {market.name}
            </h2>
          </Link>
        );
      })}
    </Carousel>
  );
};

export default MarketCarousel;
