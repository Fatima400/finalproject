import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import './Login.css';
import Logo from '../image/Logo.png';


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dachboard"); // weiter leitung nach erfolgreiche login auf nachste Seite//
    } catch {
      setError("Failed to log in");
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
        <h2 className="heading">Log In</h2>
          {error && <div className="alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="inputContainer" id="email" type="email" ref={emailRef} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="passs" id="password" type="password" ref={passwordRef} required />
            </div>
            <button disabled={loading} className="sub" type="submit">
              Log In
            </button>
          </form>
          <div className="pass">
            <Link  to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
      <div className="up">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}