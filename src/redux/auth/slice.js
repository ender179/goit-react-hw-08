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
    contacts: [], // Додано поле для зберігання контактів  
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
                state.user = { name: null, email: null }; // Очищаємо дані користувача  
                state.token = null; // Очищаємо токен  
                state.isLoggedIn = false; // Встановлюємо статус виходу користувача  
                state.contacts = []; // Очищаємо контакти  
            })  
            .addCase(refreshUser.fulfilled, (state, { payload }) => {  
                state.user = payload.user;  
                state.isLoggedIn = true;  
            })  
            .addCase(refreshUser.pending, (state) => {  
                state.isRefreshing = true;  
            })  
            .addCase(refreshUser.rejected, (state) => {  
                state.isRefreshing = false;  
            });  
    },  
});  

export const { setFilter } = authSlice.actions; // Якщо є, адаптуйте експорти  
export default authSlice.reducer;