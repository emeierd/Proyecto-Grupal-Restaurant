import React from "react";
import AboutUs from "../components/AboutUs";
import DrinkSection from "../components/DrinkSection";
import Footer from "../components/Footer";
import Cover from "../components/Cover";
import MenuSection from "../components/MenuSection";
import NavBar from "../components/Navbar";
import PromoCarousel from "../components/PromoCarousel";
import PartySection from "../components/PartySection";
import ReserveSection from "../components/ReserveSection";

const Home = () => {
  return (
    <>
      <NavBar />
      <Cover />
      <PromoCarousel />
      <MenuSection />
      <DrinkSection />
      <ReserveSection />
      <PartySection />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Home;
