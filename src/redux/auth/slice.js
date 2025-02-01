import { createSlice } from '@reduxjs/toolkit';  
import { logIn, logOut, refreshUser } from './operations';  

const authSlice = createSlice({  
    name: 'auth',  
    initialState: {  
        user: null,  
        isRefreshing: false,  
        error: null,  
    },  
    reducers: {  
        register: (state, action) => {  
            state.user = action.payload;   
        },  
    },  
    extraReducers: (builder) => {  
        builder  
            .addCase(refreshUser.pending, (state) => {  
                state.isRefreshing = true;  
            })  
            .addCase(refreshUser.fulfilled, (state, action) => {  
                state.user = action.payload;  
                state.isRefreshing = false;  
            })  
            .addCase(refreshUser.rejected, (state, action) => {  
                state.isRefreshing = false;  
                state.error = action.payload;  
            })  
            .addCase(logIn.fulfilled, (state, action) => {  
                state.user = action.payload;   
            })  
            .addCase(logOut.fulfilled, (state) => {  
                state.user = null;   
            });  
    },  
});  

export const { register } = authSlice.actions;   
export const authReducer = authSlice.reducer;