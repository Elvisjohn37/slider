import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalRepayments: 0,
  monthlyRepayments: 0,
};

const slice = createSlice({
  name: "total",
  initialState: initialState,
  reducers: {
    setTotalRepayments: (state, action) => {
      state.totalRepayments = action.payload.totalRepayments;
    },
    setMonthlyRepayments: (state, action) => {
      state.monthlyRepayments = action.payload.monthlyRepayments;
    },
  },
});

export const { setTotalRepayments, setMonthlyRepayments } = slice.actions;

export default slice.reducer;
