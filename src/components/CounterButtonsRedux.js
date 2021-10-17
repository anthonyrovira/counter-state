import React, { useEffect } from "react";
import DisplayCounter from "./DisplayCounter";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { increment, decrement } from "../features/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const CounterButtonRedux = () => {
  const dispatch = useDispatch();

  const counterValue = useSelector((state) => {
    return state.counter.value;
  });
  const counterTitle = useSelector((state) => {
    return state.counter.title;
  });

  useEffect(() => {
    console.log("redux: " + counterValue);
  }, [counterValue]);

  return (
    <div className="counter">
      <h2 className="counter-title">{counterTitle}</h2>

      <div className="counter-value-container">
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          <FontAwesomeIcon icon={faMinus} size="4x" className="icons" />
        </button>

        <DisplayCounter value={counterValue} />

        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          <FontAwesomeIcon icon={faPlus} size="4x" className="icons" />
        </button>
      </div>
    </div>
  );
};

export default CounterButtonRedux;
