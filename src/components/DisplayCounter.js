import React from "react";

const DisplayCounter = (props) => {
  return (
    <div className="counter-value">
      <h2>{props.value}</h2>
    </div>
  );
};

export default DisplayCounter;
