import React from "react";
import AboutUs from "../components/AboutUs";
import DrinkSection from "../components/DrinkSection";
import Footer from "../components/Footer";
import HappyHours from "../components/HappyHours";
import Cover from "../components/Cover";
import MenuSection from "../components/MenuSection";
import NavBar from "../components/Navbar";
import PromoCarousel from "../components/PromoCarousel";
import PartySection from "../components/PartySection";
import ReserveSection from "../components/ReserveSection";
import Orders from "../components/Orders";

const Home = () => {
  return (
    <>
      <NavBar />
      <Cover />
      <PromoCarousel />
      <MenuSection />
      <ReserveSection />
      <DrinkSection />
      <HappyHours />
      <PartySection />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Home;
