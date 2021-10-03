import React from "react";
import DisplayCounter from "./DisplayCounter";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CounterButtons = ({ value, setValue }) => {
  const handleIncrement = () => {
    setValue((prevValue) => {
      if (prevValue === 10) {
        return prevValue;
      }
      return prevValue + 1;
    });
  };
  const handleDecrement = () => {
    setValue((prevValue) => {
      if (prevValue === 0) {
        return prevValue;
      }
      return prevValue - 1;
    });
  };
  console.log("useState: " + value);
  return (
    <div className="counter">
      <h2 className="counter-title">useState : </h2>

      <div className="counter-value-container">
        <button onClick={handleDecrement}>
          <FontAwesomeIcon icon={faMinus} size="4x" className="icons" />
        </button>

        <DisplayCounter value={value} />

        <button onClick={handleIncrement}>
          <FontAwesomeIcon icon={faPlus} size="4x" className="icons" />
        </button>
      </div>
    </div>
  );
};

export default CounterButtons;
