import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalIsOpen: false,
  deleteModalIsOpen: false,
  deleteId: '',
  editContact: {},
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalIsOpen = true;
      state.editContact = action.payload;
    },

    closeModal: (state, action) => {
      state.editContact = {};
      state.modalIsOpen = false;
    },

    openDeleteModal: (state, action) => {
      state.deleteId = action.payload;
      state.deleteModalIsOpen = true;
    },

    closeDeleteModal: (state, action) => {
      state.deleteId = '';
      state.deleteModalIsOpen = false;
    },
  },
});

export const modalReducer = slice.reducer;
export const { openModal, closeModal, openDeleteModal, closeDeleteModal } =
  slice.actions;
