import { Navigate } from "react-router-dom";

// authService.js
const API_BASE_URL = "https://auth-api-gcxi.onrender.com";

const authService = {
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      // Assuming the backend returns a token upon successful login
      const token = data.token;

      // Store the token in localStorage or a secure storage method
      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      throw new Error("Error during login");
    }
  },

  register: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      // Assuming the backend returns a token upon successful registration
      const token = data.token;

      // Store the token in localStorage or a secure storage method
      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      throw new Error("Error during registration");
    }
  },

  logout: () => {
    // Clear the token from localStorage or a secure storage method
    localStorage.removeItem("token");
    // Additional cleanup or redirect logic can be added here
  },
};

export default authService;
