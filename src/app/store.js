import { configureStore } from '@reduxjs/toolkit';
import favReducer from './slices/favSlice'
import cartReducer from './slices/cartSlice'
import favModalReducer from './slices/favModalSlice';
import showReducer from './slices/showSlice'
import cartModalReducer from './slices/cartModalSlice';

const store = configureStore({
  reducer: {
    show: showReducer,
    fav: favReducer,
    favModal:favModalReducer,
    cart: cartReducer,
    cartModal:cartModalReducer
  },
});

export default store;