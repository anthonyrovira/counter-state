import { configureStore } from "@reduxjs/toolkit";
import counterReducerRedux from "../features/counterSlice";

export const reduxStore = configureStore({
  reducer: { counter: counterReducerRedux },
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});
