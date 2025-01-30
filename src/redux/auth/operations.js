import { createAsyncThunk } from '@reduxjs/toolkit';

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