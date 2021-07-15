import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Sorry, that location wasn't found</h2>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
