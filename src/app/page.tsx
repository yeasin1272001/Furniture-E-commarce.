import Banner from "@/pages/home/banner";
import BestSeller from "@/pages/home/bestSeller";
import LivingFurniture from "@/pages/home/livingFurniture";
import NewArrival from "@/pages/home/newArrival";
import ServicesTag from "@/pages/home/ServicesTag";
import SpecialOffer from "@/pages/home/SpecialOffer";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <ServicesTag />
      <BestSeller />
      <SpecialOffer />
      <NewArrival />
      <LivingFurniture />
    </div>
  );
};

export default HomePage;
