import Image from "next/image";
import Link from "next/link";
import React from "react";
import LatestProducts from "./latest-products/LatestProducts";
import PopularCategories from "./popular-categories/PopularCategories";
import PopularProducts from "./popular-products/PopularProducts";
import PopularVendors from "./popular-vendors/PopularVendors";
import ReviewSection from "./review-section/ReviewSection";

const HomePage = () => {
  return (
    <>
     <LatestProducts/>
     <PopularCategories/>
     <PopularProducts/>
     <PopularVendors/>
     <ReviewSection/>
    </>
  );
};

export default HomePage;
