import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css'

import Logo from '../image/Logo.png';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
     <div className="lcard">
        <div className="card-body">
      <div className="nav-log">
          <img src={Logo} alt="Logo" className="logoname" />
        </div>
        <h2 className="heading">Sign Up</h2>
        {error && <div className="alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input className="inputContainer" id="email" type="email" ref={emailRef} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="passs"
              id="password"
              type="password"
              ref={passwordRef}
              required
            />
          </div>
          <div>
            <label htmlFor="password-confirm">Password Confirmation</label>
            <input
              id="password-confirm"
              type="password"
              ref={passwordConfirmRef}
              required
              className="passs"
            />
          </div>
          <button disabled={loading} type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div className="log">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </div>
    </>
  );
}
