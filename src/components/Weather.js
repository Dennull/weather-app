import React from "react";
import ExtraWeatherInfo from "./ExtraWeatherInfo";

const Weather = ({ weatherData }) => {
  const convertTemp = (temp_kelvin) => {
    return Math.floor(temp_kelvin - 273.15);
  };

  return (
    <section className="weather-info">
      <h2 className="location">
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <div className="weather-main">
        <i
          className={`wi wi-owm-${weatherData.weather[0].id} weather-icon`}
        ></i>
        <p className="weather-condition">{weatherData.weather[0].main}</p>
        <h3 className="temperature">
          {convertTemp(weatherData.main.temp)}&deg;C
        </h3>
      </div>
      <ExtraWeatherInfo weatherData={weatherData} convertTemp={convertTemp} />
    </section>
  );
};

export default Weather;
