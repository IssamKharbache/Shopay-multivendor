"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "nuka-carousel";
import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const HeroCarousel = ({ banners }) => {
  const config = {
    nextButtonClassName: "rounded-full mr-5 ",
    nextButtonText: <IoIosArrowForward />,
    pagingDotsClassName: "me-2 w-4 h-4 ",
    pagingDotsContainerClassName: "",
    prevButtonClassName: "rounded-full ml-5 ",
    prevButtonText: <IoIosArrowBack />,
  };
  return (
    <Carousel
      autoplay
      wrapAround
      autoplayInterval={2000}
      defaultControlsConfig={config}
      className="rounded-md overflow-hidden shadow-xl  mx-auto"
    >
      {banners.map((banner, index) => {
        return (
          <Link key={index} href={banner.link}>
            <Image
              src={banner.imageUrl}
              width={1500}
              height={1500}
              className="w-full object-contain"
              alt={banner.title}
            />
          </Link>
        );
      })}
    </Carousel>
  );
};

export default HeroCarousel;
