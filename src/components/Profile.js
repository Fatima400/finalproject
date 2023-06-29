import React, { useState } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMeun from "./HamburgerMenu";


import "./Profile.css";
import UserDataForm from './UserDataForm';


import Footer from './Footer';



export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <HamburgerMeun />
      
  

    
      {error && <Alert variant="danger">{error}</Alert>}
      <strong className="halo"><h1 className="hallo">Hallo</h1>Email:</strong> {currentUser && currentUser.email}

    
      <UserDataForm/>
      <br />
      <br />
     
    

      <Link to="/Recipes">

        <button className="butt">get your dietplanning</button>

      </Link>
      <Footer />
    </>
  );
};
