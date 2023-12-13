// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(token));

  useEffect(() => {
    // Validate the token or perform any other checks here
    // Update isAuthenticated based on the result
    setIsAuthenticated(Boolean(token));
  }, [token]);

  const login = async (email, password) => {
    try {
      const authToken = await authService.login(email, password);
      setToken(authToken);
      setIsAuthenticated(Boolean(token));
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

  const logout = async () => {
    try {
      await authService.logout();
      setToken("");
    } catch (error) {
      // Handle logout error
      console.error("Logout error:", error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        setIsAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
