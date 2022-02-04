import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <Link className="links" to={"/"}>
        <h1>MERNstaurant</h1>
      </Link>
      <Link id="navLinks" className="links" to={"/"}>
        Promotions
      </Link>
      <Link className="links" to={"/"}>
        Menu
      </Link>
      <Link className="links" to={"/"}>
        Reserve
      </Link>
      <Link className="links" to={"/"}>
        Gallery
      </Link>
      <Link className="links" to={"/"}>
        Drinks
      </Link>
      <Link className="links" to={"/"}>
        Happy Hours
      </Link>
      <Link className="links" to={"/"}>
        Party
      </Link>
      <Link className="links" to={"/"}>
        About Us
      </Link>
    </div>
  );
};

export default Navbar;
