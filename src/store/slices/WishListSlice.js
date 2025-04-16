import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.value.find((item) => item.id == action.payload.id)
        ? null
        : state.value.push(action.payload);
    },
    removeFromWishlsit: (state, action) => {
      state.value = state.value.filter(
        (movie) => movie.id != action.payload.id
      );
      // const index = state.value.findIndex(item => action.payload.id == item.id)
      // state.value.splice(index, 1);
    },
    deleteAllFromWishlist: (state) => {
      state.value = [];
    },
  },
});

export const { addToWishlist, removeFromWishlsit, deleteAllFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const INITAL_STATE = [];
// const TVwatchList = createSlice({
//   name: "TVwatchList",
//   initialState: INITAL_STATE,
//   reducers: {
//     toggleTVFromWatch: (state, action) => {
//       console.log(state);
//       if (!state.includes(action.payload)) {
//         state.push(action.payload);
//       } else {
//         state.splice(state.indexOf(action.payload), 1);
//       }
//     },
//   },
// });
// export const { addTVToWatch, removeTVFromWatch, toggleTVFromWatch } =
//   TVwatchList.actions;
// export default TVwatchList.reducer;
