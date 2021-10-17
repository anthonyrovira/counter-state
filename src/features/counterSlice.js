import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  title: "Redux : ",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      let increasingValue = (state.value += 1);
      state.value >= 10 && (increasingValue = 10);
      state.value = increasingValue;
    },
    decrement: (state) => {
      let decreasingValue = (state.value -= 1);
      state.value <= 0 && (decreasingValue = 0);
      state.value = decreasingValue;
    },
    resetRedux: (state) => {
      state.value = 0;
    },
    setTitle: (state, action) => {
      // Not actually used in this example, but you can use it to set the title
      state.title = action.payload;
    },
  },
});

export const { increment, decrement, resetRedux, setTitle } =
  counterSlice.actions;
export default counterSlice.reducer;
