import React from "react";

const ExtraWeatherInfo = ({ weatherData, convertTemp }) => {
  const convertWind = (wind_ms) => {
    const wind_kh = wind_ms * 3.6;
    return wind_kh.toFixed(2);
  };

  return (
    <ul className="weather-extra">
      <li>Feels like {convertTemp(weatherData.main.feels_like)}&deg;</li>
      <li>
        Low/High: {convertTemp(weatherData.main.temp_min)}&deg;/
        {convertTemp(weatherData.main.temp_max)}&deg;
      </li>
      <li>Wind: {convertWind(weatherData.wind.speed)} km/hr</li>
      <li>Pressure: {weatherData.main.pressure} hPa</li>
      <li>Humidity: {weatherData.main.humidity}%</li>
      {/* <p>Sunrise: {weatherData.sys.sunrise}</p> */}
      {/* <p>Sunset: {weatherData.sys.sunset}</p> */}
    </ul>
  );
};

export default ExtraWeatherInfo;
