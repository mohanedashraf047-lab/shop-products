import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/productSlice"; // make sure the path is correct

const Products = ({ data, details }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <section id="Product1" className="section-p1">
      <h2>{details.title}</h2>
      <p>Summer Collection New Modern Design</p>

      <div className="pro_container">
        {data.map((product) => (
          <div className="pro" key={product.id}>
            <img src={product.image} alt="image" />
            <div className="descreption">
              <span>{product.title}</span>
              <h5>{product.category}</h5>
              <div className="star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i}>
                    <MdOutlineStarPurple500
                      style={{
                        color:
                          i < Math.round(product.rating?.rate)
                            ? "#f7d000"
                            : "#ccc",
                      }}
                    />
                  </i>
                ))}
              </div>
              <h4>${parseFloat(product.price).toFixed(2)}</h4>
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
