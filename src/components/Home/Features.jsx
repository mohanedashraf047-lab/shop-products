import React from "react";
import '../css/all.min.css'
import {
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
} from "../../assets";

const Features = () => {
  const Data = [
    {
      id: 1,
      img: feature1,
      title: "Free Shipping",
    },
    {
      id: 2,
      img: feature2,
      title: "Online Order",
    },
    {
      id: 3,
      img: feature3,
      title: "Save Money",
    },
    {
      id: 4,
      img: feature4,
      title: "Promotions",
    },
    {
      id: 5,
      img: feature5,
      title: "Happy Sall",
    },
    {
      id: 6,
      img: feature6,
      title: "F24/7 Support",
    },
  ];

  return (
    <section id="Features" className="section-p1">
      {
        Data.map((item)=> (
            <div className="fe-box" key={item.id}>
                <img src={item.img} alt="image" />
                <h6>{item.title}</h6>
            </div>
        ))
      }
    </section>
  );
};

export default Features;
