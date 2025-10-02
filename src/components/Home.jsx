import React from "react";
import {n1,n2, n3, n4, n5, n6, n7, n8, p1, p2, p3,p4,p5, p6,p7,p8,} from "../assets";
import Features from "./Home/Features";
import Products from "./Home/Products";
import Banner1 from './Home/Banner1';
import Banner2 from './Home/Banner2';
import Banner3 from './Home/Banner3';
import NewsLetter from './Home/NewsLetter'
import Hero from './Home/Hero'


const Home = () => {
  const details1 = {
    title: "Featured Products",
  };
  const details2 = {
    title: "New Arrivals",
  };

  const Products1 = [
    {
      id: 1,
      img: p1,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 2,
      img: p2,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 3,
      img: p3,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 4,
      img: p4,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 5,
      img: p5,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 6,
      img: p6,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 7,
      img: p7,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 8,
      img: p8,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
  ];

  const Products2 = [
    {
      id: 1,
      img: n1,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 2,
      img: n2,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 3,
      img: n3,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 4,
      img: n4,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 5,
      img: n5,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 6,
      img: n6,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 7,
      img: n7,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
    {
      id: 8,
      img: n8,
      title: "adidas",
      p: "Carton Astrount T-Shirts",
      price: "$90",
      rating: 5,
    },
  ];

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
