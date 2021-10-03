import create from "zustand";

export const useZustand = create((set) => ({
  counter: 0,
  buttonTitle: "Zustand : ",

  increment: () =>
    set((state) => {
      let increasingValue = state.counter + 1;
      state.counter >= 10 && (increasingValue = 10);
      return { counter: increasingValue };
    }),

  decrement: () =>
    set((state) => {
      let decreasingValue = state.counter - 1;
      state.counter <= 0 && (decreasingValue = 0);
      return { counter: decreasingValue };
    }),

  reset: () => set({ counter: 0 }),
}));
