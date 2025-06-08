"use client";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

// Images
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.png";
import banner3 from "../../images/banner3.png";
import banner4 from "../../images/banner4.png";
import bg from "../../images/bg.png";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  const banners = [banner2, banner3, banner4, banner1];

  return (
    <div
      className="overflow-hidden bg-cover bg-center bg-fixed p-4"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container className="slider-container relative">
        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {banners.map((banner, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row w-full h-[400px] items-center justify-between">
                {/* Text Content */}
                <div className="w-full md:w-1/2 px-4 md:px-8">
                  <Container className="">
                    <div className="text-black max-w-lg space-y-2 md:space-y-4">
                      <p className="text-xs md:text-sm lg:text-lg text-orange-500 tracking-wide">
                        Free shipping offer order $120
                      </p>
                      <h2 className="text-lg md:text-2xl lg:text-6xl font-bold drop-shadow-lg">
                        New arrivals
                      </h2>
                      <h1 className="text-lg md:text-2xl lg:text-7xl font-bold drop-shadow-lg text-orange-600">
                        Living Room
                      </h1>
                      <h1 className="text-lg md:text-2xl lg:text-7xl font-bold drop-shadow-lg text-orange-600">
                        2025
                      </h1>

                      <Link href={"/shop"}>
                        <button className="border border-gray-500 bg-transparent duration-500 text-orange-600 py-1 px-3 md:py-2 md:px-4 rounded-lg hover:bg-orange-700 hover:text-white transition">
                          Order Now
                        </button>
                      </Link>
                    </div>
                  </Container>
                </div>

                {/* Image Part */}
                <div className="w-full md:w-1/2">
                  <Image
                    className="w-full h-[200px] md:h-[500px] object-contain"
                    src={banner}
                    alt={`Banner ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Banner;
