import React, { useEffect } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { addToCart, fetchProducts } from "../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { GridLoader } from "react-spinners";

// the prop is ====> {onProductClick}
const AllProducts = ({ onProductClick }) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // Only fetch products if not already fetched
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <GridLoader color="#1a730cff" />
      </div>
    );
  }

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  return (
    <section id="Product1" className="section-p1">
      <div className="pro_container">
        {items.map((product) => (
          <div className="pro" key={product.id}>
            <img
              src={product.image}
              alt="Product"
              onClick={() => onProductClick(product)}
            />
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

export default AllProducts;
