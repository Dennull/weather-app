import React from "react";

const Searchbar = ({ getWeather }) => {
  return (
    <section>
      <form>
        <input type="text" id="city" placeholder="City"></input>
        <input type="text" id="country" placeholder="Country"></input>
        <button type="submit" className="submit-button" onClick={getWeather}>
          Go
        </button>
      </form>
    </section>
  );
};

export default Searchbar;
