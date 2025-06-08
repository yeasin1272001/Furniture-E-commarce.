"use client";

import Container from "@/components/container";
import SectionTitle from "@/components/SectionTitle";
import { Arrival } from "@/constant";
import Image from "next/image";
import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";

const NewArrival = () => {
  return (
    <Container className="mt-8">
      <SectionTitle title="New chairs arrivals" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8">
        {Arrival.map((product) => (
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
                className="object-contain hover:scale-125 transition-transform duration-300"
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
              <p className="text-orange-500 font-bold mt-1">${product.price}</p>
            </div>

            {/* Plus Icon */}
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-slate-900 text-white rounded-tl-xl flex items-center justify-center hover:w-10 hover:h-10 hover:bg-orange-500 hover:rounded-tl-2xl duration-500">
              <FaPlus className="text-xs" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default NewArrival;
