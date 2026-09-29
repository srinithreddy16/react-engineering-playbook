import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
export const myStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
