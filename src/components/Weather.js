import React from "react";

const Weather = ({ weatherData }) => {
  const convertTemp = (temp_kelvin) => {
    return Math.floor(temp_kelvin - 273.15);
  };

  const convertWind = (wind_ms) => {
    const wind_kh = wind_ms * 3.6;
    return wind_kh.toFixed(2);
  };

  return (
    <section>
      <h2>
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <div>
        <i className={`wi wi-owm-${weatherData.weather[0].id}`}></i>
        <h3>{convertTemp(weatherData.main.temp)}</h3>
        <p>Feels like {convertTemp(weatherData.main.feels_like)}</p>
      </div>
      <div>
        <p>
          Low/High: {convertTemp(weatherData.main.temp_min)}/
          {convertTemp(weatherData.main.temp_max)}
        </p>
        <p>Wind: {convertWind(weatherData.wind.speed)} km/hr</p>
        <p>Pressure: {weatherData.main.pressure} hPa</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        {/* <p>Sunrise: {weatherData.sys.sunrise}</p> */}
        {/* <p>Sunset: {weatherData.sys.sunset}</p> */}
      </div>
    </section>
  );
};

export default Weather;
