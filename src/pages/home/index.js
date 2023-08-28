import Header from "../../components/common/header";
import HeroSection from "../../components/herosection";
import ProductShowCase from "../../components/productShowcase";
import FeelSpecial from "../../components/feelSpecial";
import CredExperiance from "../../components/credExperience";
import CredSecurity from "../../components/credSecurity";
import BrandsLove from "../../components/brandsLove";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperiance />
      <CredSecurity />
    </>
  );
};

export default HomePage;
