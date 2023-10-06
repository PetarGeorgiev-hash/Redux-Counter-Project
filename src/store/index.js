import { createSlice, configureStore } from "@reduxjs/toolkit";

const defState = {
  counter: 0,
  toggleCounter: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: defState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    add(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.toggleCounter = !state.toggleCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
