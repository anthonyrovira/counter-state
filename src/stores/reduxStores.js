import { createStore } from "redux";
import counterReducerRedux from "../reducers/counterReducerRedux";

export const reduxStore = createStore(
  counterReducerRedux,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
