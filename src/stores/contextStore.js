import React, { createContext } from "react";

import counterReducer from "../reducers/counterReducer.js";

const CounterContext = createContext(counterReducer);

const initialState = { count: 0, buttonTitle: "useContext : " };

const CounterProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(counterReducer, initialState);

  const value = { state, dispatch };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
export { CounterContext, CounterProvider };
