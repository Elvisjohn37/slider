import { configureStore } from "@reduxjs/toolkit";
import s1Slice from "./../components/slider/s1Slice";
import s2Slice from "./../components/slider/s2Slice";
import s3Slice from "./../components/slider/s3Slice";
import totalSlice from "./../components/slider/totalSlice";

const store = configureStore({
  reducer: {
    s1: s1Slice,
    s2: s2Slice,
    s3: s3Slice,
    total: totalSlice,
  },
});

export default store;
