
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App

// App.js
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  // Initialize weather data state with default values
  const [weatherData, setWeatherData] = useState({ temperature: 0, conditions: "" });

  // Simulating fetching weather data from an API
  useEffect(() => {
    // Fetch weather data (dummy data for demonstration)
    const fetchWeatherData = async () => {
      // Simulating API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Set weather data to provided input { temperature: 25, conditions: "Sunny" }
      setWeatherData({ temperature: 25, conditions: "Sunny" });
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherDisplay weather={weatherData} />
    </div>
  );
};

export default App;
