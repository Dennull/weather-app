import Weather from "./components/Weather";
import Error from "./components/Error";
import Searchbar from "./components/Searchbar";
import "weather-icons/css/weather-icons.css";

function App() {
  return (
    <div className="app">
      <Searchbar />
      <Weather />
      {/* <Error /> */}
    </div>
  );
}

export default App;
