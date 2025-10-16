import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import './shop.css'


const ShopPags = () => {
  return (
    <section id="Pagination" className="section-p1">
      <Link to='/shop' id="button">1</Link>
      <Link to='/shop' id="button">2</Link>
      <Link to='/shop' id="button">
        <li className="fa-solid "><FaArrowRight /></li>
      </Link>
    </section>
  );
};

export default ShopPags;
