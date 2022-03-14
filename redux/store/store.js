import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../slices/cart-slice";
import uiSiceReducer from "../slices/ui-slice";

const store = configureStore({
  reducer: { cart: cartSliceReducer, ui: uiSiceReducer },
});

export default store;
