import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../../config/goItApi';
import toast from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const { data } = await goitApi.post('contacts', body);
      toast.success('Your contact is added!');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await goitApi.delete(`contacts/${id}`);
      toast.success('Contact deleted successfully!');
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/updateContact',
  async (updateContact, thunkAPI) => {
    const { id, data } = updateContact;

    try {
      const { body } = await goitApi.patch(`contacts/${id}`, data);
      toast.success('Contact updated successfully!');
      return { id, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
