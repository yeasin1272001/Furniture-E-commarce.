import React from "react";
import Container from "./container";

import logo from "../images/logo.png";
import Image from "next/image";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { FaCartShopping, FaUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-[#0A1D37] text-white">
      <Container className="flex flex-col md:flex-row items-center justify-between py-3 gap-4 md:gap-0">
        {/* Left side */}
        <div className="flex items-center gap-3 md:gap-5 lg:gap-6">
          <Image src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <div className="hover:duration-300">
            <h1 className="text-xl lg:text-2xl font-semibold text-[#FF6600] hover:text-[#FF6600]/90 duration-300 tracking-wide">
              M2Market
            </h1>
            <p className="text-sm text-gray-300 hover:text-gray-100 duration-300">
              Furniture Store
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <FaSearch className="cursor-pointer" size={20} />
            <FaRegHeart className="cursor-pointer" size={20} />

            <div className="relative">
              <FaCartShopping className="cursor-pointer" size={20} />
              <span className="absolute -top-2 -right-2 bg-[#FF6600] text-white text-xs px-1 rounded-full">
                0
              </span>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="text-center sm:text-right">
              <span className="text-xs sm:text-xs block">Login / Register</span>
              <h3 className="text-sm sm:text-base font-semibold">My Account</h3>
            </div>
            <FaUser size={22} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
