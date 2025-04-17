import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice"; // Adjust path if necessary

export const store = configureStore({
  reducer: {
    languages: languageReducer,
  },
});