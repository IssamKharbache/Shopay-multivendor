"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TrainingCarousel = ({ blogs }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
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
      itemClass="p-4 pb-8 "
    >
      {blogs.map((blog, index) => {
        return (
          <div
            href="#"
            className="flex flex-col   gap-2 rounded-xl bg-slate-300  dark:bg-slate-800 p-8 pb-6 "
            key={index}
          >
            <Image
              src={blog.imageUrl}
              width={1200}
              height={686}
              className="w-full h-48 object-cover rounded-sm"
              alt={blog.title}
            />
            <h2 className="text-gray-900 dark:text-slate-100 pt-4  text-center font-semibold line-clamp-2 ">
              {blog.title}
            </h2>
            <p className="font-light pt-4  text-gray-900 dark:text-gray-300 line-clamp-3 ">
              {blog.description}
            </p>
            <div className="flex flex-col xl:flex-row gap-4 justify-between">
              <Link
                href="#"
                className="bg-blue-400 hover:bg-blue-500 text-black dark:bg-blue-600 dark:text-white dark:hover:bg-blue-800 rounded-lg p-2 mt-4 duration-200 text-center"
              >
                Read More
              </Link>
              <Link
                href="#"
                className="flex  items-center gap-2 underline hover:opacity-65 p-2 mt-4 "
              >
                Talk To Consultent <FaArrowRight />
              </Link>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TrainingCarousel;
