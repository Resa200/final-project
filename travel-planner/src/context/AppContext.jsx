// AppContext.js
import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [hotelPrices, setHotelPrices] = useState(null);
  const [attractions, setAttractions] = useState(null);

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        weather,
        setWeather,
        hotelPrices,
        setHotelPrices,
        attractions,
        setAttractions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
