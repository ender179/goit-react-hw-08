import axios from 'axios';  
import { createAsyncThunk } from '@reduxjs/toolkit';  

axios.defaults.baseURL = 'https://connections-api.goit.global/';  

export const logIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {  
    try {  
        const response = await axios.post('/users/login', credentials);  
        return response.data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});  

export const logOut = createAsyncThunk('auth/logOut', async () => {  
    await axios.post('/users/logout');   
});  

export const refreshUser = createAsyncThunk('auth/refreshUser', async () => {  
    const response = await axios.get('/users/current'); 
    return response.data;  
});