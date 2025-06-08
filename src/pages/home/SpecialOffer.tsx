import Container from "@/components/container";
import React from "react";

import img from "../../images/offer.png";
import Image from "next/image";
import Link from "next/link";

const SpecialOffer = () => {
  return (
    <div className="bg-orange-300 w-full p-4">
      <Container className="bg-[#73330c] rounded-2xl ">
        <div className="w-full h-96 flex items-center justify-between  rounded-2xl p-8">
          {/* Left Side: Text and Timer */}
          <div className="text-white hover:text-orange-300 duration-300">
            <p className="text-lg">Limited offers</p>
            <h2 className="text-4xl font-bold mt-2 mb-4">UP TO 40% DISCOUNT</h2>
            <div className="flex gap-4 text-center mb-6 hover:text-orange-300">
              <div>
                <p className="text-3xl font-semibold">-525</p>
                <p className="text-sm">Days</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">-14</p>
                <p className="text-sm">Hours</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">-59</p>
                <p className="text-sm">Minutes</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">-42</p>
                <p className="text-sm">Seconds</p>
              </div>
            </div>
            <Link href={"/shop"}>
              <button className="border border-gray-500 bg-orange-700 duration-500 text-white py-1 px-3 md:py-2 md:px-4 rounded-lg hover:bg-orange-400 hover:text-black transition">
                Order Now
              </button>
            </Link>
          </div>

          {/* Right Side: Chair Image */}
          <div className="hidden md:block">
            <Image
              src={img}
              alt="Chair and table"
              className="h-96 object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffer;
