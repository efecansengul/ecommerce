import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  favOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = !state.open;
    },
    favOpenModal: (state) => {
      state.favOpen = !state.favOpen;
    },
  },
});

export const { openModal, favOpenModal } = modalSlice.actions;

export default modalSlice.reducer;
