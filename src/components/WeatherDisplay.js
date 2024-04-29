// WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ weather }) => {
  // Determine temperature color based on threshold
  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p style={{ color: temperatureColor }}>Temperature: {weather.temperature}</p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
