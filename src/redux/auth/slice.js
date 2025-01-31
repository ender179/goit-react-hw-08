import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  

// Пример операции регистрации  
export const register = createAsyncThunk('auth/register', async (userData) => {  
    // Замените URL и метод на свои  
    const response = await fetch('/api/register', {  
        method: 'POST',  
        body: JSON.stringify(userData),  
        headers: {  
            'Content-Type': 'application/json',  
        },  
    });  
    if (!response.ok) {  
        throw new Error('Registration failed');  
    }  
    return await response.json();  
});  

const initialState = {  
    user: null,  
    token: null,  
    error: null,  
};  

const authSlice = createSlice({  
    name: 'auth',  
    initialState,  
    reducers: {},  
    extraReducers: (builder) => {  
        builder  
            .addCase(logIn.fulfilled, (state, action) => {  
                state.user = action.payload.user;  
                state.token = action.payload.token;  
                state.error = null;  
            })  
            .addCase(logIn.rejected, (state, action) => {  
                state.error = action.payload; 
            })  
            .addCase(logOut.fulfilled, (state) => {  
                state.user = null;  
                state.token = null;  
            })  
            .addCase(register.fulfilled, (state, action) => {  
                state.user = action.payload.user; 
                state.token = action.payload.token;  
                state.error = null;  
            })  
            .addCase(register.rejected, (state, action) => {  
                state.error = action.payload; 
            });  
    },  
});  

export const authReducer = authSlice.reducer;