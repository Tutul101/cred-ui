import Header from "../../components/common/header";
import HeroSection from "../../components/herosection";
import ProductShowCase from "../../components/productShowcase";
import FeelSpecial from "../../components/feelSpecial";
import CredExperiance from "../../components/credExperience";
import CredSecurity from "../../components/credSecurity";
import BrandsLove from "../../components/brandsLove";
import WindowPeak from "../../components/windowPeak";
import MobileScroll from "../../components/mobileScroll";
import CredStory from "../../components/credStory";
import AppRating from "../../components/app-rating";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperiance />
      <MobileScroll />
      <WindowPeak />
      <CredSecurity />
      <CredStory />
      <AppRating />
    </>
  );
};

export default HomePage;
