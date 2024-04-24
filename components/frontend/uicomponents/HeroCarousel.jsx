"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "nuka-carousel";
import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const HeroCarousel = () => {
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
      className="rounded-md overflow-hidden shadow-xl"
    >
      <Link href="#">
        <Image
          src="/banner1.png"
          width={712}
          height={384}
          className="w-full"
          alt=""
        />
      </Link>
      <Link href="#">
        <Image
          src="/banner2.jpg"
          width={712}
          height={384}
          className="w-full"
          alt=""
        />
      </Link>
      <Link href="#">
        <Image
          src="/banner3.jpg"
          width={712}
          height={384}
          className="w-full"
          alt=""
        />
      </Link>
    </Carousel>
  );
};

export default HeroCarousel;
