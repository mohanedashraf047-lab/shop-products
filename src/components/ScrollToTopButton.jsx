import React from "react";
import "./css/main.css";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = ({ randomColor, setRandomColor }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        onMouseEnter={setRandomColor} // hover updates the shared color
        style={{ background: randomColor }}
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
