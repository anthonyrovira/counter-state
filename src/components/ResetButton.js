import React, { useContext } from "react";

import { CounterContext } from "../stores/contextStore";
import { resetRedux } from "../features/counterSlice";
import { useDispatch } from "react-redux";
import { useZustand } from "../stores/zustandStore";

const ResetButton = () => {
  const { dispatch } = useContext(CounterContext);

  //! *********** REDUX  ***********/
  const dispatchRedux = useDispatch();
  //! *********** END  ***********/

  //! *********** ZUSTAND  ***********/
  const reset = useZustand((state) => state.reset);
  //! *********** END  ***********/

  const handleReset = () => {
    dispatchRedux(resetRedux());
    reset();
    dispatch({ type: "RESET" });
  };

  return (
    <div className="reset-btn">
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default ResetButton;
