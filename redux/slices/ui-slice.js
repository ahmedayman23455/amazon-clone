import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  notifications: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    /* ------------ add item ------------ */
    addOne(state, action) {
      state.notifications.push({ ...action.payload });
    },
    removeOne(state, action) {
      const id = action.payload.id;  

      // state.notifications = state.notifications.filter((n) => n.id !== id);   
    },
  },
});

/* ---------------------------------- */

export const notifications = (state) => state.ui.notifications;
export const { addOne , removeOne } = uiSlice.actions;
export default uiSlice.reducer;
