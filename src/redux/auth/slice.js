import { createSlice } from '@reduxjs/toolkit';  
import { register, login, logout, refreshUser } from './operations';  

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
      .addCase(login.fulfilled, (state, action) => {  
        state.user = action.payload.user;  
        state.token = action.payload.token;  
        state.isLoggedIn = true;  
      })  
      .addCase(logOut.fulfilled, (state) => {  
        state.user = null;  
        state.token = null;  
        state.isLoggedIn = false;  
      })  
      .addCase(refreshUser.fulfilled, (state, action) => {  
        state.user = action.payload;  
        state.isLoggedIn = true;  
      });  
  },  
});  

export default authSlice.reducer;