import React from "react";

const MainWeatherInfo = ({ weatherData, convertTemp }) => {
  return (
    <div>
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
    </div>
  );
};

export default MainWeatherInfo;
