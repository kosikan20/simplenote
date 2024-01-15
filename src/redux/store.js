import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/bookReducer/noteSlice";
export const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});
