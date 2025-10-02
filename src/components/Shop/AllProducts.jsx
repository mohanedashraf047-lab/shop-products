import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import {
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
  n8,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
} from "../../assets";
import { Link } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";

// the prop is ====> {onProudctClick}
const AllProducts = ({ onProductClick }) => {
  const { addToCart } = useContext(CartContext);
  // const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    // navigate("/cart");
  };

  const Products = [
    {
      id: 1,
      img: p1,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 2,
      img: p2,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 3,
      img: p3,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 4,
      img: p4,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 5,
      img: p5,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 6,
      img: p6,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 7,
      img: p7,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 8,
      img: p8,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 9,
      img: n1,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 10,
      img: n2,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 11,
      img: n3,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 12,
      img: n4,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 13,
      img: n5,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 14,
      img: n6,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 15,
      img: n7,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 16,
      img: n8,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
  ];

  return (
    <section id="Product1" className="section-p1">
      <div className="pro_container">
        {Products.map((product) => (
          <div className="pro" key={product.id}>
            {/* <img src={product.img} alt="image" onClick={()=> (onProudctClick(product))} /> */}
            <img src={product.img} alt="image" onClick={() => onProductClick(product)} />
            <div className="descreption">
              <span>{product.title}</span>
              <h5>{product.p}</h5>
              <div className="star">
                <i>
                  <MdOutlineStarPurple500 />
                </i>
                <i>
                  <MdOutlineStarPurple500 />
                </i>
                <i>
                  <MdOutlineStarPurple500 />
                </i>
                <i>
                  <MdOutlineStarPurple500 />
                </i>
                <i>
                  <MdOutlineStarPurple500 />
                </i>
              </div>
              <h4>{product.price}</h4>
              <i
                className="cart"
                onClick={() => handleAddToCart(product)}>
                <FaCartPlus />
              </i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
