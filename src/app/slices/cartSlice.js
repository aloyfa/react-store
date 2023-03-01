import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
  totalAmount: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // if(action.payload === state.cartList.map(item => item)){
      //   alert('esta huevada ya esta en la lista')
      //   action.payload.quantity++
        
      // }
      action.payload.quantity = 1
      state.cartList.push(action.payload);
      state.totalCount++;
    },
    getCartTotal(state) {
      let { totalAmount, totalCount } = state.cartList.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += quantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = totalAmount.toFixed(2);
      state.totalCount = totalCount;
    },
    increase(state, action) {
      state.cartList = state.cartList.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decrease(state, action) {
      state.cartList = state.cartList
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
    clearCart: (state) => {
      state.cartList = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
