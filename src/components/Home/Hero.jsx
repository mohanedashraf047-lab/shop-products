import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section id="hero">
      <a href="#" className="hvr-wobble-to-bottom-right">
        Mohand Ashraf
      </a>
      <h4>Trade-In-Offer</h4>
      <h2>Super Value Deals</h2>
      <h1>On All Products</h1>
      <p>Save More With Coupons & Up To 70% Off!</p>
      <Link to='/shop'><button> Shop Now</button></Link>
    </section>
  );
};

export default Hero;
