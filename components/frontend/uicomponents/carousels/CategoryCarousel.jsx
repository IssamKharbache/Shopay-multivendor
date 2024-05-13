"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//icons
import { GoPlus } from "react-icons/go";
import Product from "../Product";

const CategoryCarousel = ({ products, className }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1100, min: 550 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
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
      containerClass={className}
      removeArrowOnDeviceType={["mobile"]}
      dotListClass="text-red-800"
      itemClass="p-4 pb-8"
    >
      {products.map((product, index) => {
        return <Product product={product} key={index} />;
      })}
    </Carousel>
  );
};

export default CategoryCarousel;
