import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  showCart: false,
  numberOfItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    /* ------------ add item ------------ */
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        if (newItem.cart === true) {
          if (newItem.quantity === 0) {
            newItem.quantity = 1;
          }
          existingItem.quantity = Number(newItem.quantity);
        } else {
          existingItem.quantity = Number(
            existingItem.quantity + newItem.quantity
          );
        }
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      }
      let totalPrice = 0;
      let numberOfItems = 0;
      state.items.map((item) => {
        totalPrice += item.quantity * item.price;
        numberOfItems += item.quantity;
      });
      state.totalPrice = totalPrice;
      state.numberOfItems = numberOfItems;
    },
    /* ------------ remove item ------------ */
    removeItem(state, action) {
      const elementId = action.payload.id;


     state.items =  state.items.filter((item) => item.id !== elementId);
     let totalPrice = 0;
     let numberOfItems = 0;
     state.items.map((item) => {
       totalPrice += item.quantity * item.price;
       numberOfItems += item.quantity;
     });
     state.totalPrice = totalPrice;
     state.numberOfItems = numberOfItems;
    },
  },
});

/* ---------------------------------- */
export const { addItem, removeItem } = cartSlice.actions;
export const items = (state) => state.cart.items;
export const numberOfItems = (state) => state.cart.numberOfItems;
export const totalPrice = (state) => state.cart.totalPrice;
export default cartSlice.reducer;
