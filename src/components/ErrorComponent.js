import React from "react";

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className="error-component">
      <h2>
        Oops!
        {errorMessage &&
          " " + errorMessage[0].toUpperCase() + errorMessage.slice(1)}
      </h2>
    </div>
  );
};

export default ErrorComponent;
