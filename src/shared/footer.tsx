import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTruck, FaUndo, FaHeadset, FaLock } from "react-icons/fa";
import Container from "@/components/container";

import img from "../images/payment.png";

const Footer = () => {
  return (
    <div className="bg-[#0f172a] text-white py-10">
      <Container className="">
        {/* Top Section */}
        <div className="flex flex-wrap justify-around border-b border-gray-700 pb-6 mb-6">
          <div className="flex items-center gap-2">
            <FaTruck className="text-orange-400 text-2xl" />
            <span>Fast and free delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUndo className="text-orange-400 text-2xl" />
            <span>Money back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHeadset className="text-orange-400 text-2xl" />
            <span>24/7 customer support</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLock className="text-orange-400 text-2xl" />
            <span>Secure online payment</span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-bold mb-3">Customer Zone</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/your-account">Your Account</Link>
              </li>
              <li>
                <Link href="/shipping-policies">Shipping & Policies</Link>
              </li>
              <li>
                <Link href="/refunds-replacements">Refunds & Replacements</Link>
              </li>
              <li>
                <Link href="/taxes-fees">Taxes & Fees</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-story">Our Story</Link>
              </li>
              <li>
                <Link href="/awards">Awards</Link>
              </li>
              <li>
                <Link href="/our-team">Our Team</Link>
              </li>
              <li>
                <Link href="/career">Career</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/newsletter">Newsletter</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">We Accept Credit Cards</h3>
            <div className="flex gap-4 mt-2 w-full">
              <Image src={img} alt="Visa" className="h-6 w-full" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm mt-10">
          <p>
            All copyright reserved © 2025 | Made by -{" "}
            <Link href="https://example.com">
              <span className="text-orange-400">Atef Gad</span>
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
