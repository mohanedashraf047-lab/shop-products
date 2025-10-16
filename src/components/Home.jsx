import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../components/Redux/productSlice"; // adjust path

import Features from "./Home/Features";
import Products from "./Home/Products";
import Banner1 from "./Home/Banner1";
import Banner2 from "./Home/Banner2";
import Banner3 from "./Home/Banner3";
import NewsLetter from "./Home/NewsLetter";
import Hero from "./Home/Hero";
import { GridLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // Only fetch products if not already fetched
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

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

  // Split products into two groups
  const Products1 = items.slice(0, 4);
  const Products2 = items.slice(4, 8);

  const details1 = {
    title: "Featured Products",
  };
  const details2 = {
    title: "New Arrivals",
  };

  return (
    <div>
      <Hero />
      <Features />
      <Products data={Products1} details={details1} />
      <Banner1 />
      <Products data={Products2} details={details2} />
      <Banner2 />
      <Banner3 />
      <NewsLetter />
    </div>
  );
};

export default Home;
