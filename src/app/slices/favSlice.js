import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  favList: [],
  favQuantity: 0
 };

const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addFav(state, action) {
      state.favList.push(action.payload);
      state.favQuantity++
      console.log(state.favQuantity++)
    },
    deleteFav(state, action) {
      const foundItem = state.favList.find(
        (item) => item.title === action.payload
      );

      if (foundItem) {
        state.favList.splice(state.favList.indexOf(foundItem), 1);
      }
    },
  },
});

export const favActions = favSlice.actions;
export default favSlice.reducer;
