import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";
import ErrorComponent from "./components/ErrorComponent";
import "weather-icons/css/weather-icons.css";
import { useState } from "react";

const api_key = "d2cff17fb8a250992abe82b9583409dd";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();

    // Check to see if they've entered values into the search bar
    if (city && country) {
      // The .fetch() method throws an error only if a request can't be made, so handle connection problems in the catch block
      try {
        const api_call = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`
        );
        const response = await api_call.json();
        // If the server sent an error back, throw an error
        if (!api_call.ok) {
          throw Error(response.message);
        }
        setError(false);
        setWeatherData(response);
        // } else {
        //   setError(true);
        //   throw new Error(api_call.status);
        //   console.log("API call status:", api_call.status);
        //   console.log("Response error:", response.message);
        // }
      } catch (err) {
        setError(true);
        setErrorMessage(err.message);
      }
    } else {
      setSearchError(true);
    }
  };

  return (
    <>
      <Searchbar
        city={city}
        setCity={setCity}
        country={country}
        setCountry={setCountry}
        getWeather={getWeather}
        searchError={searchError}
      />
      {weatherData && !error && <Weather weatherData={weatherData} />}
      {error && <ErrorComponent errorMessage={errorMessage} />}
    </>
  );

  // if (weatherData !== null) {
  //   return (
  //     <>
  //       <Searchbar
  //         city={city}
  //         setCity={setCity}
  //         country={country}
  //         setCountry={setCountry}
  //         getWeather={getWeather}
  //         searchError={searchError}
  //       />
  //       <Weather weatherData={weatherData} />
  //       {/* <Error /> */}
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     <Searchbar
  //       city={city}
  //       setCity={setCity}
  //       country={country}
  //       setCountry={setCountry}
  //       getWeather={getWeather}
  //       searchError={searchError}
  //     />
  //     <Error />
  //   </>
  // );
}

export default App;
