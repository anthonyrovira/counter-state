import React, { useEffect } from "react";
import DisplayCounter from "./DisplayCounter";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useZustand } from "../stores/zustandStores";

const CounterButtonZustand = () => {
  const buttonTitle = useZustand((state) => state.buttonTitle);
  const counter = useZustand((state) => state.counter);
  const handleIncrement = useZustand((state) => state.increment);
  const handleDecrement = useZustand((state) => state.decrement);

  useEffect(() => {
    console.log("zustand: " + counter);
  }, [counter]);

  return (
    <div className="counter">
      <h2 className="counter-title">{buttonTitle}</h2>

      <div className="counter-value-container">
        <button onClick={handleDecrement}>
          <FontAwesomeIcon icon={faMinus} size="4x" className="icons" />
        </button>

        <DisplayCounter value={counter} />

        <button onClick={handleIncrement}>
          <FontAwesomeIcon icon={faPlus} size="4x" className="icons" />
        </button>
      </div>
    </div>
  );
};

export default CounterButtonZustand;
