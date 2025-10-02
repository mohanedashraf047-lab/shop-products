import React from 'react'
import { app, logo, pay, play } from '../assets'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
        <footer className="section-p1 ">
        <div className="col">
            <img className="logo" src={logo} alt="" />
            <h4>Contacts</h4>
            <p><strong>Adress: </strong> 563 Welligntone Roas , Street,San Fransisco</p>
            <p><strong>Phone: </strong> +002 010 64 50 16 82 </p>
            <p><strong>Hours: </strong> 10:00 - 18:00 , Mon - Sat</p>

            <div className="folow">
                <h4>Follw Us </h4>
                <div className="icon">
                    <i><FaFacebook /></i>
                    <i><FaTwitter /></i>
                    <i><FaInstagram /></i>
                    <i><FaYoutube /></i>
                    <i><FaPinterest /></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Contact Us</a>
         </div>


         <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
         </div>

         <div className="col install">
            <h4>Install App</h4>
            <p>From App Store Or Google Play</p>
            <div className="row">
                <img src={app} alt="" />
                <img src={play} alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src={pay} alt="" />

         </div>

         <div className="copyRight">
            <p>@ 2022, Tech2 etc - HTML CSS ECOMMERCE TEMPLETS</p>
         </div>


    </footer>
  )
}

export default Footer
