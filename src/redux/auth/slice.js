import { createSlice } from '@reduxjs/toolkit';  
import { logIn, logOut } from './operations'; // Теперь здесь import logOut  

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
                state.error = action.payload; // Сообщение об ошибке  
            })  
            .addCase(logOut.fulfilled, (state) => {  
                state.user = null;  
                state.token = null;  
            });  
    },  
});  

export const authReducer = authSlice.reducer;