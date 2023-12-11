import React from "react";
import { useLocation } from "react-router-dom";
import Filters from "./Filters";

const ResultsDashboard = () => {
  const location = useLocation();
  const {
    location: searchLocation,
    weatherData,
    hotelData,
    attractionsData,
  } = location.state;

  return (
    <div className="results-dashboard">
      <h2>Results for {searchLocation}</h2>
      <Filters />
      <div className="weather-widget">
        {/* Display weather data */}
        <h3>Weather</h3>
        <pre>{JSON.stringify(weatherData, null, 2)}</pre>
      </div>
      <div className="hotel-prices">
        {/* Display hotel data */}
        <h3>Hotel Prices</h3>
        <pre>{JSON.stringify(hotelData, null, 2)}</pre>
      </div>
      <div className="attractions-list">
        {/* Display attractions data */}
        <h3>Popular Attractions</h3>
        <pre>{JSON.stringify(attractionsData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ResultsDashboard;
