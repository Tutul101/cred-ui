import React from "react";
import HeroSection from "../../components/herosection";
<<<<<<< Updated upstream

const HomePage = () => {
  return <HeroSection />;
=======
import Header from "../../components/common/header";
import ProductShowCase from "../../components/productShowcase";
import FeelSpecial from "../../components/feelSpecial";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
    </>
  );
>>>>>>> Stashed changes
};

export default HomePage;
