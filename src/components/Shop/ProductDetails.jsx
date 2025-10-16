import React from "react";
import "../css/all.min.css";
import "../css/hover-min.css";
import { CartContext } from "../Context/CartContext";
import { useState, useContext } from "react";
// import { useState , useEffect} from "react";
// import { useLocation } from "react-router-dom";

const ProductDetails = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  // const [productImage, setProductImage] = useState(product?.images?.[0] || "");
  // const [productImage, setProductImage] = useState(product?.img || "");

  //  useEffect(() => {
  //   if (product?.images?.length > 0) {
  //     setProductImage(product.images[0]);
  //   }
  // }, [product]);

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
            src={product.img}
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
        <h6>Home / {product.title}</h6>
        <h4>{product.p}</h4>
        <h2>{product.price}</h2>
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
            addToCart({ ...product, quantity });
          }}
        >
          Add To Cart
        </button>
        <h4>Product Details </h4>

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id
          beatae veritatis dolor pariatur iusto autem quod dolore, quaerat
          assumenda itaque sed quos corporis a, enim saepe expedita officia
          delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          id beatae veritatis dolor pariatur iusto autem quod dolore, quaerat
          assumenda itaque sed quos corporis a, enim saepe expedita officia
          delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          id beatae veritatis dolor pariatur iusto autem quod dolore, quaerat
          assumenda itaque sed quos corporis a, enim saepe expedita officia
          delectus.
        </span>
      </div>
    </section>
  );
};

export default ProductDetails;
