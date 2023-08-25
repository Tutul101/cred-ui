import React from "react";
import HeroSection from "../../components/herosection";
import Header from "../../components/common/header";
import ProductShowCase from "../../components/productShowcase";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
    </>
  );
};

export default HomePage;
