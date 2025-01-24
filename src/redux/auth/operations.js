import { createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  

const axiosInstance = axios.create({  
    baseURL: 'https://connections-api.goital.global',  
});  

// Функція для налаштування заголовка авторизації  
const setAuthHeader = (token) => {  
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;  
};  

// Функція для очищення заголовка авторизації  
const clearAuthHeader = () => {  
    delete axiosInstance.defaults.headers.common['Authorization'];  
};  

// Операція для реєстрації  
export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {  
    try {  
        const response = await axiosInstance.post('/users/signup', credentials);  
        setAuthHeader(response.data.token);  
        return response.data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});  

// Операція для входу  
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {  
    try {  
        const response = await axiosInstance.post('/users/login', credentials);  
        setAuthHeader(response.data.token);  
        return response.data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});  

// Операція для виходу  
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {  
    try {  
        await axiosInstance.post('/users/logout');  
        clearAuthHeader();  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});  

// Операція для отримання поточного користувача  
export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {  
    const state = thunkAPI.getState();  
    const persistedToken = state.auth.token;  

    if (persistedToken === null) {  
        return thunkAPI.rejectWithValue('Unable to fetch user');  
    }  

    setAuthHeader(persistedToken);  

    try {  
        const response = await axiosInstance.get('/users/current');  
        return response.data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});  

// Операція для отримання контактів  
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {  
    try {  
        const response = await axiosInstance.get('/contacts');  
        return response.data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});