import axios from 'axios';  
import { createAsyncThunk } from '@reduxjs/toolkit';  

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {  
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;  
};  

const clearAuthHeader = () => {  
  axios.defaults.headers.common.Authorization = '';  
};  

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {  
  try {  
    await axios.post('/users/logOut');  
    clearAuthHeader();  
  } catch (error) {  
    return thunkAPI.rejectWithValue(error.message);  
  }  
});