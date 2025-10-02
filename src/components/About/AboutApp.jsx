import React from "react";
import { Link } from "react-router-dom";
import {video } from "../../assets";

const AboutApp = () => {
  return (
    <section id="about_app" className="section-p1 ">
      <h1>
        Download Our <Link to='/about'>App</Link>
      </h1>
      <div className='video'>
        <video autoPlay muted loop playsInline>
            <source  src={video} type="video/mp4"/>
        </video>
      </div>
    </section>
  );
};

export default AboutApp;
