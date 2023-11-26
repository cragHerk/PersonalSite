import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tabs = ["Home", "Portfolio", "About", "Contact"];

const initialState = {
  selected: tabs[0],
  isScrolling: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<string>) => {
      if (!state.isScrolling) {
        state.selected = action.payload;
      }
    },
    setScrolling: (state, action: PayloadAction<boolean>) => {
      state.isScrolling = action.payload;
    },
  },
});

export const { setSelected, setScrolling } = navSlice.actions;
export const selectSelected = (state: {
  nav: { selected: string; isScrolling: boolean };
}) => state.nav.selected;
export const selectIsScrolling = (state: {
  nav: { selected: string; isScrolling: boolean };
}) => state.nav.isScrolling;

export default navSlice.reducer;
