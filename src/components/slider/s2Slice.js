import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  min: 12,
  max: 36,
  minLabel: "1 year",
  maxLabel: "3 years",
  currentValue: 12,
  step: 1,
  label: "For how long?",
};

const slice = createSlice({
  name: "s2",
  initialState: initialState,
  reducers: {
    setCurrentValue: (state, action) => {
      state.currentValue = action.payload.currentValue;
    },
  },
});

export const { setCurrentValue } = slice.actions;

export default slice.reducer;
