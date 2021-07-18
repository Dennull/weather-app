import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";
import Error from "./components/Error";
import "weather-icons/css/weather-icons.css";
import { useState } from "react";

const api_key = "d2cff17fb8a250992abe82b9583409dd";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`
    );
    const response = await api_call.json();
    setWeatherData(response);
    console.log(weatherData);
    console.log(city, country);
  };

  return (
    <>
      <Searchbar
        city={city}
        setCity={setCity}
        country={country}
        setCountry={setCountry}
        getWeather={getWeather}
      />
      {weatherData ? <Weather weatherData={weatherData} /> : null}
      {/* <Error /> */}
    </>
  );
}

export default App;
