import React from "react";
import ExtraWeatherInfo from "./ExtraWeatherInfo";
import MainWeatherInfo from "./MainWeatherInfo";

const Weather = ({ weatherData }) => {
  const convertTemp = (temp_kelvin) => {
    return Math.floor(temp_kelvin - 273.15);
  };

  return (
    <section className="weather-info">
      <MainWeatherInfo weatherData={weatherData} convertTemp={convertTemp} />
      <ExtraWeatherInfo weatherData={weatherData} convertTemp={convertTemp} />
    </section>
  );
};

export default Weather;
