import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk(
  'auth/register',
  async (userRegister, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userLogin, thunkAPI) => {
    try {
      const { data } = await axios.post('users/login');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.post('users/logout');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('contacts');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// Додайте у файл redux/auth/operations.js операції, оголошені за допомогою createAsyncThunk, для роботи з користувачем:

// register - для реєстрації нового користувача. Базовий тип екшену "auth/register". Використовується у компоненті RegistrationForm на сторінці реєстрації.
// login - для логіну існуючого користувача. Базовий тип екшену "auth/login". Використовується у компоненті LoginForm на сторінці логіну.
// logout - для виходу з додатка. Базовий тип екшену "auth/logout". Використовується у компоненті UserMenu у шапці додатку.
// refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh". Використовується у компоненті App під час його монтування.
