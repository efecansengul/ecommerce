import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";
import searchReducer from "./searchSlice";
import favReducer from "./favoriteSlice";
export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    carts: cartReducer,
    modal: modalReducer,
    search: searchReducer,
    fav: favReducer,
  },
});
