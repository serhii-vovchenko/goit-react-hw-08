import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../contacts/slice';

const slice = createSlice({
  name: 'filter',
  initialState: initialState.filters,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// export const selectNameFilter = state => state.filters.name;
export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
