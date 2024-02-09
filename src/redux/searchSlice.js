import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "", // arama sorgusu state'i
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
