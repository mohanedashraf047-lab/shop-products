import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./components/css/all.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import CartProvider from "./components/Context/CartContext";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";
import "./components/css/all.min.css";

const App = () => {
  const [randomColor, setRandomColor] = useState("");

  // Generate initial gradient on mount
  useEffect(() => {
    setRandomColor(generateRandomColor());
  }, []);

  // Gradient generator
  const generateRandomColor = () => {
    const color1 = `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`;
    const color2 = `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`;
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  };

  return (
    <CartProvider>
      {" "}
      {/* ✅ Wrap everything in CartProvider */}
      <BrowserRouter />
        <Router>
          <ScrollToTop />
          <Navbar progressBarColor={randomColor} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
          </Routes>
          <ScrollToTopButton
            randomColor={randomColor}
            setRandomColor={() => setRandomColor(generateRandomColor())}
          />
          <Footer />
        </Router>
    </CartProvider>
  );
};

export default App;
