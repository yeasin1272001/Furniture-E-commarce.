import React from "react";
import Container from "./container";
import logo from "../images/logo.png";
import Image from "next/image";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
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
              <FaSearch
                className="cursor-pointer hover:text-orange-400 transition"
                size={20}
              />
              <FaRegHeart
                className="cursor-pointer hover:text-orange-400 transition"
                size={20}
              />
              <div className="relative">
                <FaCartShopping
                  className="cursor-pointer hover:text-orange-400 transition"
                  size={20}
                />
                <span className="absolute -top-2 -right-2 bg-[#FF6600] text-white text-xs px-1 rounded-full">
                  0
                </span>
              </div>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="text-center sm:text-right">
                <span className="text-xs sm:text-xs block">
                  Login / Register
                </span>
                <h3 className="text-sm sm:text-base font-semibold">
                  My Account
                </h3>
              </div>
              <FaUser size={22} />
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Navigation */}
      <div className="shadow-gray-300 shadow-md p-1">
        <Container className="flex items-center justify-between py-2">
          {/* Nav Menu */}
          <ul className="flex items-center gap-5 md:gap-7 text-sm md:text-base font-medium">
            <li className="hover:text-orange-400 duration-300 hover:underline">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-orange-400 duration-300 hover:underline">
              <Link href={"/cart"}>Cart</Link>
            </li>
            <li className="hover:text-orange-400 duration-300 hover:underline">
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li className="hover:text-orange-400 duration-300 hover:underline">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:text-orange-400 duration-300 hover:underline">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>

          {/* Language Selector */}
          <select
            className="bg-white text-gray-800 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
          </select>
        </Container>
      </div>
    </header>
  );
};

export default Header;
