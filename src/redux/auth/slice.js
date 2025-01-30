import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  

export const logOut = createAsyncThunk('auth/logout', async () => {  
    await axios.post('/auth/logout');  
});  

const initialState = {  
    user: null,  
    token: null,  
    isLoggedIn: false,  
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
                state.user = null;  
                state.token = null;  
                state.isLoggedIn = false;  
            })  
            .addCase(refreshUser.fulfilled, (state, { payload }) => {  
                state.user = payload.user;  
            });  
    },  
});  

export default authSlice.reducer;