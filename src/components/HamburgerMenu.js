import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {  useNavigate } from "react-router-dom";
import Logo from '../image/Logo.png';
import './HamburgerMenu.css';
function BasicExample() {

  
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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <div className="logo-icon-container">
      <img src={Logo} alt="Logo" className="logo-icon" />
      </div>
    
       

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <Nav.Link className="nave" href="/Dachboard">Home</Nav.Link>
            <Nav.Link className="nave" href="/Profile">Profile</Nav.Link>
            <Nav.Link className="nave" href="/Recipes">Recipes</Nav.Link>
            <Nav.Link className="nave" href="/UploadProfile">Update Profile</Nav.Link>
            <Nav.Link  className="nave" onClick={handleLogout} >Logout</Nav.Link>


          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

