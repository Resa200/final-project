// PrivateRoute.js

import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Dashboard /> : <Navigate to="/login" />;
};

export default PrivateRoute;
