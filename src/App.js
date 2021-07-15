import Landing from "./pages/Landing";
import Weather from "./pages/Weather";
import Error from "./pages/Error";
import Searchbar from "./components/Searchbar";
import "weather-icons/css/weather-icons.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Searchbar />
        <Switch>
          {/* <Route exact path="/">
            <Landing />
          </Route> */}
          <Route path="/">
            <Weather />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
