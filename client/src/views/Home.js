import React from "react";
import AboutUs from "../components/AboutUs";
import DrinkSection from "../components/DrinkSection";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HappyHours from "../components/HappyHours";
import Cover from "../components/Cover";
import MenuSection from "../components/MenuSection";
import NavBar from "../components/Navbar";
import Party from "../components/Party";
import PromoCarousel from "../components/PromoCarousel";
import Reserve from "../components/Reserve";

const Home = () => {
  return (
    <>
      <NavBar />
      <Cover />
      <PromoCarousel />
      <MenuSection />
{/*       <Reserve /> */}
      <Gallery />
      <DrinkSection />
      <HappyHours />
{/*       <Party /> */}
      <AboutUs />
      <Footer />
    </>
  );
};

export default Home;
