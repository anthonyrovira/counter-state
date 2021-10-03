import React from "react";

import { useDispatch } from "react-redux";

import { useZustand } from "../stores/zustandStores";

const ResetButton = (props) => {
  //! *********** REDUX  ***********/
  const dispatch = useDispatch();
  //! *********** END  ***********/

  //! *********** ZUSTAND  ***********/
  const reset = useZustand((state) => state.reset);
  //! *********** END  ***********/

  let { setValue } = props;

  const handleReset = () => {
    dispatch({ type: "RESET" });
    reset();
    setValue(0);
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
