import axios from 'axios';  
import { createAsyncThunk } from '@reduxjs/toolkit';  

axios.defaults.baseURL = 'https://connections-api.goit.global/';  

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {  
    try {  
        const response = await axios.post('/users/signup', credentials);  
        setAuthHeader(response.data.token);
        return response.data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});  

export const logIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {  
    try {  
        const response = await axios.post('/users/login', credentials);  
        setAuthHeader(response.data.token);
        return response.data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});  

export const logOut = createAsyncThunk('auth/logOut', async () => {  
    try {
        await axios.post('/users/logout');  
        clearAuthHeader();
    } catch (error) {
    }
});  

export const refreshUser = createAsyncThunk('auth/refreshUser', async (arg, thunkAPI) => {  
    try {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        if (token === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        setAuthHeader(token);
        const response = await axios.get('/users/current'); 
        return response.data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);
    }  
});