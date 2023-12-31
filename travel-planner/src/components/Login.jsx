// Login.js
import React, { useState } from "react";
import authService from "../services/authService";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const token = await authService.login(email, password);
      // Handle successful login, set authentication context, etc.
      // console.log("Logged in! Token:", token);
      setIsAuthenticated(Boolean(token));
      navigate("/dashboard");
    } catch (error) {
      // Handle login error
      console.error("Login error:", error.message);
      alert("Invalid Details");
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
