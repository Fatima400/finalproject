import { React, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
      <Card className="">
        <Card.Body>
          
          <h2 className="heading">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control className="inputContainer"  id="email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="sub" type="submit">
              Log In
            </Button>
          </Form>
          <div className="pass">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="up">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}