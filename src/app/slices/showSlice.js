import { createSlice } from "@reduxjs/toolkit";

const initialFavState = { showModal: true };

const showSlice = createSlice({
  name: 'show',
  initialState: initialFavState,
  reducers: {
    hideMessage(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const showActions = showSlice.actions;
export default showSlice.reducer