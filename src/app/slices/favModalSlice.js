import { createSlice } from '@reduxjs/toolkit';

const initialState = { isShown: false, title:'' };

const favModalSlice = createSlice({
  name: 'favModal',
  initialState,
  reducers: {
    handleFavModal(state,action) {
      state.isShown = !state.isShown;
      state.title = action.payload

    },
  },
});

export const favModalActions = favModalSlice.actions
export default favModalSlice.reducer;
