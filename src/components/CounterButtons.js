import React, { useContext } from "react";
import DisplayCounter from "./DisplayCounter";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CounterContext } from "../stores/contextStore";

const CounterButtons = ({ value }) => {
  const { state, dispatch } = useContext(CounterContext);

  const { count, buttonTitle } = state;

  const handleIncrement = () => {
    if (count < 10) {
      dispatch({ type: "INCREMENT" });
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch({ type: "DECREMENT" });
    }
  };

  console.log("useContext: " + count);

  return (
    <div className="counter">
      <h2 className="counter-title">{buttonTitle}</h2>

      <div className="counter-value-container">
        <button onClick={handleDecrement}>
          <FontAwesomeIcon icon={faMinus} size="4x" className="icons" />
        </button>

        <DisplayCounter value={count} />

        <button onClick={handleIncrement}>
          <FontAwesomeIcon icon={faPlus} size="4x" className="icons" />
        </button>
      </div>
    </div>
  );
};

export default CounterButtons;
