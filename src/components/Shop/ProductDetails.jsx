import React from "react";
import "../css/all.min.css";
import "../css/hover-min.css";
import { useState} from "react";
import { addToCart } from "../Redux/productSlice";
import { useDispatch } from "react-redux";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

    const handleAddToCart = (product) => {
      dispatch(addToCart({ ...product, quantity: quantity }));
    };

  if (!product) {
    return (
      <p>Product not found. Try going back and selecting a product again.</p>
    );
  }

  return (
    <section id="proDeatails" className="section-p1">
      <div className="single_pro_image">
        <div className="image-gallery">
          <img
            src={product.image}
            alt="Main"
            className="main-image"
            id="MainImage"
            style={{ width: "100%" }}
          />

          <div className="thumbnail-row">
            {product.images?.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Thumbnail ${index}`}
                className="small-img"
                style={{ width: "100%" }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="single_pro_deatails">
        <h1> {product.category}</h1>
        <h4>{product.p}</h4>
        <h2>${product.price}</h2>
        <select>
          <option>Select Size</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
          <option>X Large</option>
        </select>

        <input
          type="number"
          min={1}
          value={quantity}
          // id="qtyInput"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button
          className="normal"
          id="button"
          onClick={() => {
            // const qty = Number(document.getElementById("qtyInput").value) || 1;
            handleAddToCart(product);
          }}
        >
          Add To Cart
        </button>
        <h4>Product Details </h4>

        <span>
          {product.description}
        </span>
      </div>
    </section>
  );
};

export default ProductDetails;
