import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Orders from "../components/Orders";

const Order = () => {
  return (
    <div className="bg-dark">
      <Navbar />
      <Orders />
      <Footer />
    </div>
  );
};

export default Order;
