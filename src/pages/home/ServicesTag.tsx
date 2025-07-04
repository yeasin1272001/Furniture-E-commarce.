import React from "react";
import { FaTruckMoving } from "react-icons/fa6";
import { PiCurrencyCircleDollarThin } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiCreditCard1 } from "react-icons/ci";
import Container from "@/components/container";

const ServicesTag = () => {
  const service = [
    {
      icon: <FaTruckMoving />,
      title: "Free delivery",
      des: "Free shipping on all orders",
    },
    {
      icon: <CiCreditCard1 />,
      title: "Payments",
      des: "100% payment security",
    },
    {
      icon: <PiCurrencyCircleDollarThin />,
      title: "Returns",
      des: "Money-back guarantee under 7 days",
    },
    {
      icon: <TfiHeadphoneAlt />,
      title: "Support 24/7",
      des: "Support online 24 hours a day",
    },
  ];

  return (
    <div className="mt-8">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {service.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 bg-gray-200 hover:bg-orange-100 duration-300 p-2 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="text-5xl text-blue-500">{item.icon}</div>
            {/* Text */}
            <div>
              <h1 className="text-lg font-semibold text-[#2C3E50]">
                {item.title}
              </h1>
              <p className="text-sm text-gray-500">{item.des}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ServicesTag;
