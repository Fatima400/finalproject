import React, { useState } from "react";
// import { Card, Alert, Button } from "react-bootstrap";
// import { useAuth } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import Bmr from "./Bmr";
// import Datum from "./Datum"
import HamburgerMenu from './HamburgerMenu';
import './Dachboard.css';
// import Navbar from './Navbar';
import Footer from './Footer';
// import BMI from "./BMI";
export default function Dashboard() {


  
  return (
    <>
{/*      
      <Navbar/> */}
      <HamburgerMenu className=""/><br/>
      {/* <Datum /> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <div  className="titel">

      <p>Discover FitFood, your go-to destination for healthy nutrition and wellness. We provide a wide range of resources, including a vast recipe database, to support your journey towards optimal health. Calculate your BMI and BMR using our advanced tools to understand your body's composition and metabolic needs. Join us today and embrace a nourished, balanced lifestyle.</p>
      <image></image>
      </div>
     

      {/* <BMI/> */}
      <Footer/>
    </>
  );
}