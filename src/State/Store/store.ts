import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import navSlice from "../Reducers/nav.slice";
import sendSlice from "../Reducers/send.slice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    send: sendSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
