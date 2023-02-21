import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

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
// = = = = = = = = = = = = = = = =
const favInitialState = { isFav: false };

const favSlice = createSlice({
  name: 'favorite',
  initialState: favInitialState,
  reducers: {
    markFav(state) {
      state.isFav = !state.isFav
    },
  },
});

const store = configureStore({
  reducer: {
    show: showSlice.reducer,
    favorite: favSlice.reducer,
  },
});

export const showActions = showSlice.actions;
export const favActions = favSlice.actions;

export default store;
