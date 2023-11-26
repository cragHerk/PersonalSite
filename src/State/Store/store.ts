import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../Reducers/nav.slice";

const store = configureStore({
  reducer: {
    nav: navSlice,
  },
});

export default store;
