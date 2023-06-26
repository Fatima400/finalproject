import React from 'react';
import './Navbar.css';
import Logo from '../image/logo-no-background.png';

import fb from "../image/fbimge.png";
import twitter from "../image/twitterimge.png";
import Linkedin from "../image/linkedinimge.png";
import Instgram from "../image/instaimge.png";


const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-link">How it work</li>
        <li className="navbar-link">Service</li>
        <li className="navbar-link">About</li>


      </ul>
      </nav>
      



   </>
  );
};

export default Navbar;