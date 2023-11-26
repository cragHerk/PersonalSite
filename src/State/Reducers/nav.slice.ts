import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tabs = ["Home", "Portfolio", "About", "Contact"];

const initialState = tabs[0];

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setSelected } = navSlice.actions;
export const selectSelected = (state: { nav: string }) => state.nav;

export default navSlice.reducer;
