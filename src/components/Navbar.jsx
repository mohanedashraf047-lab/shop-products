import React from "react";
import { logo } from "../assets";
import { SlBasket } from "react-icons/sl";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import "./css/all.min.css";
import ScrollProgressBar from "./ScrollProgressBar";
import { useSelector } from "react-redux";

const Navbar = ({ progressBarColor }) => {
  const location = useLocation();
  const cart = useSelector((state) => state.products.cart || []);
  const uniqueItems = cart.length;

  // Helper to check if a path matches the current location
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <section id="header">
      <Link to="/">
        {" "}
        <img src={logo} alt="" />{" "}
      </Link>

      <div>
        <ul id="navBar">
          <li>
            <Link className={isActive("/") ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={isActive("/shop") ? "active" : ""} to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className={isActive("/blog") ? "active" : ""} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={isActive("/about") ? "active" : ""} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              className={isActive("/contact") ? "active" : ""}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              id="lg_bag"
              className={isActive("/cart") ? "active" : ""}
              to="/cart"
            >
              <HiMiniShoppingCart className="fa-sharp fa-solid fa-cart-shopping" />
            </Link>
            <span className="cart-count">{uniqueItems}</span>
          </li>
          <Link to="/" id="close">
            <i className="fa-solid fa-xmark"></i>
          </Link>
        </ul>
      </div>
      <div id="mobil">
        <Link to="/">
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        </Link>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
      <ScrollProgressBar progressBarColor={progressBarColor} />
    </section>
  );
};

export default Navbar;
