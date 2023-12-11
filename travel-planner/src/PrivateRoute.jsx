// PrivateRoute.js
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;
