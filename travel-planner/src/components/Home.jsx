import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Travel Planner App</h1>
      <p>
        Plan your trips with ease! Get weather forecasts, hotel prices, and
        discover popular attractions.
      </p>
      <div className="auth-links">
        <Link to="/login">Login</Link>
        <span> or </span>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Home;
