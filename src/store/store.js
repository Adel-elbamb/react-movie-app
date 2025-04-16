import { configureStore } from "@reduxjs/toolkit";
import WishlistReducer from "./slices/WishlistSlice";

const store = configureStore({
  reducer: {
    wishlist: WishlistReducer,
  },
});

export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import TVwatchList from "./slices/TVWatchList.js";
// const store = configureStore({
//   reducer: {
//     tvShowsList: TVwatchList,
//   },
// });
// export default store;
