import { createSlice } from '@reduxjs/toolkit';

const initialState = { isShown: false, msg:'' };

const cartModalSlice = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
    handleCartModal(state,action) {
      state.isShown = !state.isShown;
      state.title = action.payload
    },
    hideModal(state){
      state.isShown = false
    }
  },
});

export const cartModalActions = cartModalSlice.actions
export default cartModalSlice.reducer;
