import React, { useState } from "react";
// import { Card, Alert, Button } from "react-bootstrap";
// import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
// import Bmr from "./Bmr";
// import Datum from "./Datum"
import HamburgerMenu from './HamburgerMenu';
import './Dachboard.css';
// import Navbar from './Navbar';
import Footer from './Footer';
import woman from '../image/woman.jpg';
import Logoname from '../image/Logoname.png';

// import BMI from "./BMI";
export default function Dashboard() {


  
  return (
    <>
     <HamburgerMenu />
    <div className="bod">


      
      <div className="link">
      {/* <img src={Logoname} alt="Logoname" className="logoname" /> */}
      <p className="text">Discover FitFood, your go-to destination for healthy nutrition and wellness. We provide a wide range of resources, including a vast recipe database, to support your journey towards optimal health. Calculate your BMI and BMR using our advanced tools to understand your body's composition and metabolic needs. Join us today and embrace a nourished, balanced lifestyle.</p>
      </div>
      <div > <img src={woman} alt="woman" className='woman'></img> </div>
      </div>
      

      

      
      
     

      {/* <BMI/> */}
      
      <Link to="/Profile">

<button className='start'>Start</button>

</Link>
    <Footer/>
    </>
  );
}