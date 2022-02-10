import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Drinks from "../components/Drinks";

const DrinksView = () => {
  return (
    <div className="bg-dark">
      <NavBar />
      <Drinks />
      <Footer />
    </div>
  );
};

export default DrinksView;
