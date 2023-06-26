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
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/Recipes">Recipes</Nav.Link>
            <Nav.Link href="/UploadProfile">Update Profile</Nav.Link>
            <Nav.Link onClick={handleLogout} >Logout</Nav.Link>

{/* 
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="./update-profile">Update Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}  >
              Logout
                 </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* {/* </NavDropdown> */}
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

