import React, { useContext } from "react";
// import { p1, p2, p3 } from "../../assets";
import Products from "../Home/Products";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "../css/main.css";

const CartProducts = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <section id="cart" className="section-p1 ">
      {cartItems.length === 0 ? (
        <h2 className="emptyCart">Your cart is empty 😢</h2>
      ) : (
      <table width="100%">
        <thead>
          <tr>
            <td>Remove</td>
            <td>Imag</td>
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
                  onClick={() => removeFromCart(item.id)}
                  style={{ cursor: "pointer" }}
                  title="Remove item"
                >
                  <CiCircleRemove />
                </i>
              </td>
              <td>
                <img src={item.img} alt="Here an image" />
              </td>
              <td>{item.p}</td>
              <td>{item.price}</td>
              <td>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                />
              </td>
              <td>
                $
                {(
                  parseFloat(item.price.replace("$", "")) * item.quantity
                ).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </section>
  );
};

export default CartProducts;
