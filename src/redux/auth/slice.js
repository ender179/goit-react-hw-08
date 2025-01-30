import { createSlice } from '@reduxjs/toolkit';  
import { register, login, logout, refreshUser } from './operations';  

const initialState = {  
    user: {  
        name: null,  
        email: null,  
    },  
    token: null,  
    isLoggedIn: false,  
    isRefreshing: false,  
    contacts: [],  
};  

const authSlice = createSlice({  
    name: 'auth',  
    initialState,  
    extraReducers: (builder) => {  
        builder  
            .addCase(register.fulfilled, (state, { payload }) => {  
                state.user = payload.user;  
                state.token = payload.token;  
                state.isLoggedIn = true;  
            })  
            .addCase(login.fulfilled, (state, { payload }) => {  
                state.user = payload.user;  
                state.token = payload.token;  
                state.isLoggedIn = true;  
            })  
            .addCase(logout.fulfilled, (state) => {  
                state.user = { name: null, email: null };  
                state.token = null;  
                state.isLoggedIn = false;  
                state.contacts = [];  
            })  
            .addCase(refreshUser.fulfilled, (state, { payload }) => {  
                state.user = payload.user;  
            });  
    },  
});  

export default authSlice.reducer;