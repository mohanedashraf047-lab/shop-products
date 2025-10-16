import React from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../Redux/productSlice";
import "../css/main.css";

const CartProducts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cart);

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value);
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <section id="cart" className="section-p1">
      {cartItems.length === 0 ? (
        <h2 className="emptyCart">Your cart is empty 😢</h2>
      ) : (
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>SubTotal</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="ProductDetails">
                <td>
                  <i
                    className="CircleRemove"
                    onClick={() => handleRemove(item.id)}
                    style={{ cursor: "pointer" }}
                    title="Remove item"
                  >
                    <CiCircleRemove />
                  </i>
                </td>
                <td>
                  <img src={item.image} alt="Product" />
                </td>
                <td>{item.title}</td>
                <td>${parseFloat(item.price).toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                </td>
                <td>${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default CartProducts;
