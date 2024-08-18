import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../contacts/slice';
import {
  loginThunk,
  registerThunk,
  logoutThunk,
  refreshUserThunk,
} from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: initialState.auth,

  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(loginThunk.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })

      .addCase(refreshUserThunk.fulfilled, (state, actions) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user.name = actions.payload.name;
        state.user.email = actions.payload.email;
      })

      .addCase(refreshUserThunk.pending, (state, actions) => {
        state.isRefreshing = true;
      })

      .addCase(refreshUserThunk.rejected, (state, actions) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = slice.reducer;
