import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  

export const register = createAsyncThunk('auth/register', async (userData) => {  
    const response = await axios.post('/users/register', userData);  
    return response.data;  
});  

const initialState = {  
    user: null,  
    token: localStorage.getItem('token') || null,  
    isLoggedIn: false,  
    isRefreshing: false,  
};  

const authSlice = createSlice({  
    name: 'auth',  
    initialState,  
    reducers: {},  
    extraReducers: (builder) => {  
        builder  
            .addCase(register.fulfilled, (state, action) => {  
                state.user = action.payload.user;  
                state.token = action.payload.token;  
                state.isLoggedIn = true;  
            })  
    },  
});  

export default authSlice.reducer;