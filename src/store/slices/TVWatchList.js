import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = [];
const TVwatchList = createSlice({
  name: "TVwatchList",
  initialState: INITAL_STATE,
  reducers: {
    toggleTVFromWatch: (state, action) => {
      console.log(state);
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      } else {
        state.splice(state.indexOf(action.payload), 1);
      }
    },
  },
});
export const { addTVToWatch, removeTVFromWatch, toggleTVFromWatch } =
  TVwatchList.actions;
export default TVwatchList.reducer;
