import { createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  

// Налаштування базової URL-адреси  
axios.defaults.baseURL = 'https://connections-api.goit.global';  

// Функція для налаштування заголовка авторизації  
const setAuthHeader = (token) => {  
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;  
};  

// Функція для очищення заголовка авторизації  
const clearAuthHeader = () => {  
    axios.defaults.headers.common.Authorization = '';  
};  

// Операція для реєстрації  
export const register = createAsyncThunk(  
    'auth/register',  
    async (credentials, thunkAPI) => {  
        try {  
            const response = await axios.post('/users/signup', credentials);  
            setAuthHeader(response.data.token);  
            return response.data;  
        } catch (error) {  
            return thunkAPI.rejectWithValue(error.message);  
        }  
    }  
);  

// Операція для входу  
export const login = createAsyncThunk(  
    'auth/login',  
    async (credentials, thunkAPI) => {  
        try {  
            const response = await axios.post('/users/login', credentials);  
            setAuthHeader(response.data.token);  
            return response.data;  
        } catch (error) {  
            return thunkAPI.rejectWithValue(error.message);  
        }  
    }  
);  

// Операція для виходу  
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {  
    try {  
        await axios.post('/users/logout');  
        clearAuthHeader();  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});  

// Операція для отримання користувача (освіження сесії)  
export const refreshUser = createAsyncThunk(  
    'auth/refresh',  
    async (_, thunkAPI) => {  
        const state = thunkAPI.getState();  
        const persistedToken = state.auth.token;  

        if (persistedToken === null) {  
            return thunkAPI.rejectWithValue('Unable to fetch user');  
        }  

        try {  
            setAuthHeader(persistedToken);  
            const response = await axios.get('/users/current');  
            return response.data;  
        } catch (error) {  
            return thunkAPI.rejectWithValue(error.message);  
        }  
    }  
);  

// Операція для отримання контактів  
export const fetchContacts = createAsyncThunk(  
    'contacts/fetchContacts',  
    async (_, thunkAPI) => {  
        try {  
            const response = await axios.get('/contacts');  
            return response.data;  
        } catch (error) {  
            return thunkAPI.rejectWithValue(error.message);  
        }  
    }  
);