import { createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  

axios.defaults.baseURL = 'https://connections-api.goit.global';  

const setAuthHeader = (token) => {  
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;  
};  

const clearAuthHeader = () => {  
    delete axios.defaults.headers.common.Authorization;  
};  

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {  
    try {  
        const { data } = await axios.post('/auth/register', credentials);  
        return data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.response.data);  
    }  
});  

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {  
    try {  
        const { data } = await axios.post('/auth/login', credentials);  
        setAuthHeader(data.token);  
        return data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.response.data);  
    }  
});  

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {  
    try {  
        await axios.post('/auth/logout');  
        clearAuthHeader();  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.response.data);  
    }  
});  

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {  
    const token = thunkAPI.getState().auth.token;  
    if (token === null) {  
        return thunkAPI.rejectWithValue('Unable to fetch user');  
    }  
    setAuthHeader(token);  
    try {  
        const { data } = await axios.get('/auth/refresh');  
        return data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.response.data);  
    }  
});  

export const addContact = createAsyncThunk('contacts/add', async (newContact, thunkAPI) => {  
    try {  
        const { data } = await axios.post('/contacts', newContact);  
        return data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.response.data);  
    }  
});  

export const fetchContacts = createAsyncThunk('contacts/fetch', async (_, thunkAPI) => {  
    try {  
        const { data } = await axios.get('/contacts');  
        return data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.response.data);  
    }  
});