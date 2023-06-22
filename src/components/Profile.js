import React, { useState } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMeun from "./HamburgerMenu";
import BMI from "./BMI";

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
    <HamburgerMeun/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

      
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser && currentUser.email}
          {/* <Link to="/update-profile" className=""> */}
            {/* Update Profile */}
          {/* </Link> */}
        </Card.Body>
      </Card>
      {/* <div className="">
        <Button className="" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
    <BMI/>
    </>
  );
}
