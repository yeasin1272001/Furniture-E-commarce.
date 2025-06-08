import Banner from "@/pages/home/banner";
import BestSeller from "@/pages/home/bestSeller";
import ServicesTag from "@/pages/home/ServicesTag";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <ServicesTag />
      <BestSeller />
    </div>
  );
};

export default HomePage;
