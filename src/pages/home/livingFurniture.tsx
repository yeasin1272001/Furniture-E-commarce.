"use client";

import Container from "@/components/container";
import SectionTitle from "@/components/SectionTitle";
import { Arrival, Living } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";

import img from "../../images/desk.png";

const LivingFurniture = () => {
  return (
    <div className="bg-gray-50 py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 flex flex-col justify-center bg-[#E2F2B2] p-4">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wide text-slate-900">
              Living furniture you love
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold mt-4 text-slate-700 text-center lg:text-left">
              Sale up to{" "}
              <span className="bg-orange-400 text-white px-3 py-1 rounded animate-pulse">
                20% Off
              </span>
            </h2>
            <div className="mt-6 text-center lg:text-left">
              <Link href={"/shop"}>
                <button className="border-3 border-orange-500 bg-transparent duration-300 text-orange-600 py-2 px-5 rounded-lg hover:bg-orange-600 hover:text-white transition">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className=" flex justify-center lg:justify-start">
              <Image className="h-96  object-cover" src={img} alt="Furniture" />
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3">
            <SectionTitle title="New Chairs Arrivals" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {Living.map((product) => (
                <div
                  key={product.id}
                  className="relative bg-gray-100 rounded-lg shadow-md p-4"
                >
                  {/* Top heart icon */}
                  <div className="absolute top-3 left-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center">
                    <FaHeart className="text-sm" />
                  </div>

                  {/* Image with colored background */}
                  <div
                    className="w-32 relative h-32 mx-auto rounded-full flex items-center justify-center"
                    style={{ backgroundColor: product.bgColor }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className=" object-cover h-72 w-72 hover:scale-150 transition-transform duration-300"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="mt-4">
                    <h3 className="font-semibold text-slate-900">
                      {product.name.length > 30
                        ? product.name.slice(0, 27) + "..."
                        : product.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{product.category}</p>
                    <p className="text-orange-500 font-bold mt-1">
                      ${product.price}
                    </p>
                  </div>

                  {/* Plus Icon */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-slate-900 text-white rounded-tl-xl flex items-center justify-center hover:w-10 hover:h-10 hover:bg-orange-500 hover:rounded-tl-2xl duration-500">
                    <FaPlus className="text-xs" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LivingFurniture;
