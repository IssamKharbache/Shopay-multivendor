"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MarketCarousel = () => {
  const slides = [
    {
      name: "Veggies",
      img: "/veggies.jpg",
    },
    {
      name: "Fruits",
      img: "/banner1.png",
    },
    {
      name: "Meat",
      img: "/banner3.jpg",
    },
    {
      name: "Corn",
      img: "/banner2.jpg",
    },
    {
      name: "Drink",
      img: "/marketbg.jpg",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={false}
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
      {slides.map((slide, index) => {
        return (
          <Link href="#" className="rounded-xl" key={index}>
            <Image
              src={slide.img}
              width={1200}
              height={686}
              className="w-full  h-48 rounded-md"
              alt="Vegetables"
            />
            <h2 className="text-gray-900 dark:text-slate-100 p-2 text-center font-semibold rounded-b-md">
              {slide.name}
            </h2>
          </Link>
        );
      })}
    </Carousel>
  );
};

export default MarketCarousel;
