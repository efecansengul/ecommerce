import { createSlice } from "@reduxjs/toolkit";

const fetchLocalStorage = () => {
  const favBox = localStorage.getItem("favBox");
  if (favBox) {
    return JSON.parse(localStorage.getItem("favBox"));
  } else {
    return [];
  }
};

const giveLocalStorage = (data) => {
  return localStorage.setItem("favBox", JSON.stringify(data));
};

const initialState = {
  favArray: fetchLocalStorage(),
  count: 0, //favorilenen ürün sayısı
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFav: (state, action) => {
      const { id, title } = action.payload;
      const index = state.favArray.findIndex((item) => item.id === id);
      if (index == -1) {
        //sepete yeni bir ürün olarak ekle
        state.favArray.push({ id, title });
      }
      //sepetin toplam tutarı ve ürün sayısını güncelle

      state.count++;
      giveLocalStorage(state.favArray);
    },
    removeFav: (state, action) => {
      const { id, title } = action.payload;
      const index = state.favArray.findIndex((item) => item.id === id);
      state.favArray.splice(index, 1);
      state.count -= 1;
      giveLocalStorage(state.favArray);
    },
    dischargeFav: (state, action) => {
      state.favArray = [];
      state.count = 0;

      giveLocalStorage(state.favArray);
    },
  },
});

export const { addFav, removeFav, dischargeFav } = favSlice.actions;

export default favSlice.reducer;
