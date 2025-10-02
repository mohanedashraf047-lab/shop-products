import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";


const Products = ({data, details}) => {
  const { addToCart } = useContext(CartContext);
  // const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    // navigate("/cart");
  };
  return (
    <section id="Product1" className="section-p1">
      <h2>{details.title}</h2>
      <p>Summer Collection New Modern Design</p>

      <div className="pro_container">
        {data.map((product) => (
          <div className="pro" key={product.id}>
            <img src={product.img} alt="image" />
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
                <i className="cart" onClick={() => handleAddToCart(product)}>
                  <FaCartPlus />
                </i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
