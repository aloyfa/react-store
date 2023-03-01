import { configureStore } from '@reduxjs/toolkit';
import favReducer from './slices/favSlice'
import cartReducer from './slices/cartSlice'

import showReducer from './slices/showSlice'
import favModalReducer from './slices/favModalSlice';

const store = configureStore({
  reducer: {
    show: showReducer,
    fav: favReducer,
    favModal:favModalReducer,
    cart: cartReducer
  },
});

export default store;