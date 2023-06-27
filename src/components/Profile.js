import React, { useState } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMeun from "./HamburgerMenu";
import BMI from "./BMI";
import Indax from '../image/Index.jpg'
import "./Profile.css"

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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/*       
      <Card>
        <Card.Body> */}
      {error && <Alert variant="danger">{error}</Alert>}
      <strong><h2>Hallo:</h2>Email:</strong> {currentUser && currentUser.email}
      {/* <Link to="/update-profile" className=""> */}
      {/* Update Profile */}
      {/* </Link> */}
      {/* </Card.Body>
      </Card> */}
      {/* <div className="">
        <Button className="" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
 <br />
      <br />
      <br />
      <BMI/>
      <div>
        <img src={Indax} alt="mass" className="mass"></img>
      </div>

      <Link to="/Recipes">

        <button >get your dietplanning</button>

      </Link>
      <Footer />
    </>
  );
}
