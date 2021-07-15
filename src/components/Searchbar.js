import React from "react";

const Searchbar = () => {
  return (
    <section>
      <form>
        <label htmlFor="city">City</label>
        <input type="text" id="city"></input>
        <label htmlFor="country">Country</label>
        <input type="text" id="country"></input>
      </form>
      <button>Go</button>
    </section>
  );
};

export default Searchbar;
