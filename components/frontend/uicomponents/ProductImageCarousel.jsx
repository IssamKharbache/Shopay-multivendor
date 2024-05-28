"use client";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductImageCarousel = ({ productImages, thumbnail }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="col-span-5 md:col-span-3 ">
      {productImages.length >= 2 ? (
        <>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-pagination-color": "black",
              "--swiper-navigation-size": "40px",
              backgroundColor: "transparent",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {productImages.map((image, i) => (
              <SwiperSlide>
                <Image
                  src={image}
                  height={450}
                  width={450}
                  alt="250"
                  className="w-full  max-h-96 rounded-sm object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={2}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            style={{
              "--swiper-navigation-color": "#ffffff",
              "--swiper-pagination-color": "#ffffff",
              height: "25%",

              marginBottom: "20px",
            }}
          >
            {productImages.map((image, i) => (
              <SwiperSlide>
                <Image
                  src={image}
                  height={450}
                  width={450}
                  alt="250"
                  className="cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <Image
          src={thumbnail}
          alt={""}
          width={312}
          height={320}
          className="w-full  max-h-96 rounded-sm object-cover "
        />
      )}
    </div>
  );
};

export default ProductImageCarousel;
