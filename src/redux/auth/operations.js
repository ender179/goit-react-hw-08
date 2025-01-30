import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/register', userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/login', userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (arg, thunkAPI) => {
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (arg, thunkAPI) => {
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (arg, thunkAPI) => {
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (arg, thunkAPI) => {
  }
);