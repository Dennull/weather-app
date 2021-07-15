import React from "react";

const Weather = () => {
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
