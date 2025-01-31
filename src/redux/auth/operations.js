import axios from 'axios';  
import { createAsyncThunk } from '@reduxjs/toolkit';  

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {  
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;  
};  

const clearAuthHeader = () => {  
  axios.defaults.headers.common.Authorization = '';  
};  

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {  
  try {  
    await axios.post('/users/logout');  
    clearAuthHeader();  
  } catch (error) {  
    return thunkAPI.rejectWithValue(error.message);  
  }  
});