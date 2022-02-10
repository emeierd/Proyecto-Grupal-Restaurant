import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Menu from "../components/Menu";

const MenuView = () => {
  return (
    <div className="bg-dark">
      <NavBar />
      <Menu />
      <Footer />
    </div>
  );
};

export default MenuView;
