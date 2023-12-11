import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const history = useNavigate();

  const handleSearch = async () => {
    // Placeholder for API call logic
    // Replace with actual API calls for weather, hotels, attractions
    const weatherData = await fetch(
      "/api/weather?location=" + encodeURIComponent(location)
    ).then((response) => response.json());
    const hotelData = await fetch(
      "/api/hotels?location=" + encodeURIComponent(location)
    ).then((response) => response.json());
    const attractionsData = await fetch(
      "/api/attractions?location=" + encodeURIComponent(location)
    ).then((response) => response.json());

    // Redirect to the results page with the search query
    history.push({
      pathname: "/results",
      state: {
        location,
        weatherData,
        hotelData,
        attractionsData,
      },
    });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
