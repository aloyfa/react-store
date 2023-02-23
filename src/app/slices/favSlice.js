import { createSlice } from '@reduxjs/toolkit';

const favInitialState = {favList:[]};

const favSlice = createSlice({
  name: 'fav',
  initialState: favInitialState,
  reducers: {
    addFav(state, action) {
      // if(state.favList.includes(action.payload)){return}
      action.payload.isLove = true
      state.favList.push(action.payload)
      }
    },
    deleteFav(state,action){
      
    }
  },
  // markFav(state,action){
  //   const favList = state.find(action,i => action.payload.id === state[i].id)
  //   return favList.length === 0

  // }
);

export const favActions = favSlice.actions;
export default favSlice.reducer;
