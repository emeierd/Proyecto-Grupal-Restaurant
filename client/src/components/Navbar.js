import React from "react";
import { Link } from "react-router-dom";
import images from "../constants/images";
import "./styles/Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navBar-logo">
        <Link className="links" to={"/"}>
          <img src={images.logo} alt="navBar__logo" />
        </Link>
      </div>
      <ul className="navBar-links">
        <li>
          <Link id="navLinks" className="links" to={"/"}>
            Promotions
          </Link>
        </li>
        <li>
          <Link className="links" to={"/"}>
            Menu
          </Link>
        </li>
        <li>
          <Link className="links" to={"/"}>
            Reserve
          </Link>
        </li>
        <li>
          <Link className="links" to={"/"}>
            Gallery
          </Link>
        </li>
        <li>
          <Link className="links" to={"/"}>
            Drinks
          </Link>
        </li>
        <li>
          <Link className="links" to={"/"}>
            Happy Hours
          </Link>
        </li>
        <li>
          <Link className="links" to={"/"}>
            Party
          </Link>
        </li>
        <li>
          <Link className="links" to={"/"}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
