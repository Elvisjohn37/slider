import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  min: 2100,
  max: 50000,
  minLabel: "$2,100",
  maxLabel: "$50,000",
  currentValue: 2100,
  step: 100,
  label: "How much do you need?",
};

const slice = createSlice({
  name: "s1",
  initialState: initialState,
  reducers: {
    setCurrentValue: (state, action) => {
      state.currentValue = action.payload.currentValue;
    },
  },
});

export const { setCurrentValue } = slice.actions;

export default slice.reducer;
