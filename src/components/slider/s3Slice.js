import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  min: 5,
  max: 20,
  minLabel: "Not bad",
  maxLabel: "Great",
  currentValue: 5,
  step: 5,
  label: "Interest rate",
};

const slice = createSlice({
  name: "s3",
  initialState: initialState,
  reducers: {
    setCurrentValue: (state, action) => {
      state.currentValue = action.payload.currentValue;
    },
  },
});

export const { setCurrentValue } = slice.actions;

export default slice.reducer;
