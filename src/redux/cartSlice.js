import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cartBox = localStorage.getItem("cartBox");
  if (cartBox) {
    return JSON.parse(localStorage.getItem("cartBox"));
  } else {
    return [];
  }
};

const giveFromLocalStorage = (data) => {
  localStorage.setItem("cartBox", JSON.stringify(data));
};

const initialState = {
  items: fetchFromLocalStorage(),
  total: 0, // sepetin toplam tutarı
  count: 0, //sepetin ürün sayısı
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, quantity } = action.payload; //sepete eklenecek ürün bilgileri

      //sepete eklecek ürünün indexini bul
      const index = state.items.findIndex((item) => item.id === id);
      //eger sepete daha önce ürün eklenmemisse
      if (index == -1) {
        //sepete yeni bir ürün olarak ekle
        state.items.push({ id, title, price, quantity: quantity });
      } else {
        //eger sepete daha önce eklenmisse
        //sepetteki ürün miktarinı arttır
        state.items[index].quantity += quantity;
      }
      //sepetin toplam tutarı ve ürün sayısını güncelle
      state.total += price * quantity;
      state.count++;
      giveFromLocalStorage(state.items);
    },
    removeToCart: (state, action) => {
      const { id, price } = action.payload; //cıkarılacak ürün bilgileri
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index].quantity--;
        if (state.items[index].quantity === 0) {
          state.items.splice(index, 1);
        }
        state.total -= price;
        state.count -= 1;
        giveFromLocalStorage(state.items);
      }
    },
    getCartTotal: (state, action) => {
      state.total = state.items.reduce((acc, cartItem) => {
        return (acc += cartItem.quantity * cartItem.price);
      }, 0);
      state.count = state.items.reduce((acc, cartItem) => {
        return (acc += cartItem.quantity);
      }, 0);

      giveFromLocalStorage(state.items);
    },
    dischargeCart: (state, action) => {
      state.items = [];
      state.count = 0;
      state.total = 0;

      giveFromLocalStorage(state.items);
    },
  },
});

export const { addToCart, getCartTotal, removeToCart, dischargeCart } =
  cartSlice.actions;
export default cartSlice.reducer;
