import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import RequireAuth from "./context/RequireAuth";
import Dashboard from "./components/Dachboard";
import Login from "./components/Login";

import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Profile from "./components/Profile";
import Recipes from "./components/Recipes";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <Container
      className="d-flex"

    >
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Routes>
              {/* <Route path="/" element={<LandingPage />} /> */}
              <Route

                path="/"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route
               path="/update-profile"
                element={
                  <RequireAuth>
                  <Profile />
                </RequireAuth>} />

              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />

              <Route path="/Profile" element={<Profile />} />
              <Route path="/Recipes" element={<Recipes />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;