import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../contacts/slice';

const slice = createSlice({
  name: 'auth',
  initialState: initialState.user,

  extraReducers: builder => {
    // builder.addCase();
  },
});

export const authReducer = slice.reducer;
