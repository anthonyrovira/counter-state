/** Old way to manipulate the redux store, now replaced by the modern Redux Toolkit approach
 * see https://redux.js.org/tutorials/fundamentals/part-8-modern-redux
 * and https://www.youtube.com/watch?time_continue=2&v=9zySeP5vH9c&feature=emb_logo&ab_channel=JasonLengstorf
 */

/*
const initialState = {
  counter: 0,
  buttonTitle: "Redux : ",
};

const counterReducerRedux = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      let increasingValue = state.counter + 1;
      state.counter >= 10 && (increasingValue = 10);
      return {
        ...state,
        counter: increasingValue,
      };
    case "DECREMENT":
      let decreasingValue = state.counter - 1;
      state.counter <= 0 && (decreasingValue = 0);
      return {
        ...state,
        counter: decreasingValue,
      };
    case "RESET":
      return {
        ...state,
        counter: 0,
      };

    default:
      return state;
  }
};

export default counterReducerRedux;
*/
