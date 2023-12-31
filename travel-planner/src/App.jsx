import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import SearchBar from "./components/SearchBar";
import ResultsDashboard from "./components/ResultDashboard";
import FavoriteDestinations from "./components/FavoriteDestinations";
import Map from "./components/Map";
import { AuthProvider } from "./context/AuthContext";
import { AppProvider } from "./context/AppContext";

import Dashboard from "./components/Dashboard";

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
