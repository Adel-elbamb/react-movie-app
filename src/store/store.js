import { configureStore } from "@reduxjs/toolkit";
import TVwatchList from "./slices/TVWatchList.js";
const store = configureStore({
  reducer: {
    tvShowsList: TVwatchList,
  },
});
export default store;
