import React, { useContext } from "react";

import { CounterContext } from "../stores/contextStore";
import { useDispatch } from "react-redux";
import { useZustand } from "../stores/zustandStores";

const ResetButton = () => {
  const { dispatch } = useContext(CounterContext);

  //! *********** REDUX  ***********/
  const dispatchRedux = useDispatch();
  //! *********** END  ***********/

  //! *********** ZUSTAND  ***********/
  const reset = useZustand((state) => state.reset);
  //! *********** END  ***********/

  const handleReset = () => {
    dispatchRedux({ type: "RESET" });
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
