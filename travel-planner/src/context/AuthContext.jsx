// AuthContext.js
import React, { createContext, useState, useContext } from "react";
import authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const login = async (email, password) => {
    try {
      const authToken = await authService.login(email, password);
      setToken(authToken);
    } catch (error) {
      // Handle login error
      console.error("Login error:", error.message);
    }
  };

  const register = async (email, password) => {
    try {
      const authToken = await authService.register(email, password);
      setToken(authToken);
    } catch (error) {
      // Handle registration error
      console.error("Registration error:", error.message);
    }
  };

  const logout = () => {
    authService.logout();
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
