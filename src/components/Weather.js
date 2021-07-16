import React from "react";
import { useState, useEffect } from "react";

const api_key = "d2cff17fb8a250992abe82b9583409dd";

const defaultState = {
  city: null,
  country: null,
  icon: null,
  current_temp: null,
  feels_like: null,
  low_temp: null,
  high_temp: null,
  wind: null,
  pressure: null,
  visibility: null,
  humidity: null,
  precipitation: null,
  sunrise: null,
  sunset: null,
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${api_key}`
      );
      const response = await api_call.json();
    };
    getWeather();
  }, []);

  return (
    <section>
      <h2>Calgary, Alberta</h2>
      <div>
        <i className="wi wi-day-sunny"></i>
        <h3>20</h3>
        <p>Feels like 21</p>
      </div>
      <div>
        <p>Low/High: 15/23</p>
        <p>Wind: 14 km/hr</p>
        <p>Pressure: 1005 hPa</p>
        <p>Visibility: 16 km</p>
        <p>Humidity: 88%</p>
        <p>Precipitation: 2mm</p>
        <p>Sunrise: 5:31 AM</p>
        <p>Sunset: 9:51 PM</p>
      </div>
    </section>
  );
};

export default Weather;
