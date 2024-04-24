"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TrainingCarousel = () => {
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
      dotListClass="class here"
      itemClass="p-4"
    >
      {slides.map((slide, index) => {
        return (
          <div
            href="#"
            className="rounded-xl bg-slate-300 dark:bg-slate-800 p-8 pb-4 "
            key={index}
          >
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
            <p className="font-light pt-4  text-gray-900 dark:text-gray-300 line-clamp-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              inventore provident reprehenderit quae numquam excepturi vitae
              culpa repellat sed laudantium rem iure expedita, nostrum tempore
              perspiciatis placeat ad harum doloremque?
            </p>
            <div className="flex justify-between">
              <Link
                href="#"
                className="bg-blue-400 hover:bg-blue-500 text-black dark:bg-blue-600 dark:text-white dark:hover:bg-blue-800 rounded-lg p-2 mt-4 duration-200"
              >
                Read More
              </Link>
              <Link
                href="#"
                className="flex  items-center gap-2 underline p-2 mt-4 "
              >
                Talk To The Consultent <FaArrowRight />
              </Link>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TrainingCarousel;
