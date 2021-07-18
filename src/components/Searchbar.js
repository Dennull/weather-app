import React from "react";

const Searchbar = ({
  city,
  country,
  setCity,
  setCountry,
  getWeather,
  searchError,
}) => {
  return (
    <section>
      <form>
        <input
          type="text"
          id="city"
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className={`${!city && searchError ? "search-error" : null}`}
        ></input>
        <input
          type="text"
          id="country"
          placeholder="Country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          className={`${!country && searchError ? "search-error" : null}`}
        ></input>
        <button type="submit" className="submit-button" onClick={getWeather}>
          Go
        </button>
      </form>
    </section>
  );
};

export default Searchbar;
