import { createSlice } from '@reduxjs/toolkit';

const initialState = { favList: [] };

const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addFav(state, action) {
      // action.payload.isLove = true;
      state.favList.push(action.payload);
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
