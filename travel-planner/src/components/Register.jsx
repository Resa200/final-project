// Register.js
import React, { useState } from "react";
import authService from "../services/authService";
import { useNavigate, Navigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const token = await authService.register(email, password);
      // Handle successful registration, set authentication context, etc.
      console.log("Registered! Token:", token);
      navigate("/login");
    } catch (error) {
      // Handle registration error
      alert("User exists");
      navigate("/login");
      console.error("Registration error:", error.message);
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
