import { createSlice } from '@reduxjs/toolkit';  
import { fetchContacts, addContact, deleteContact, logOut } from '../auth/operations'; // Обновите импорт  

const initialState = {  
    items: [],  
    isLoading: false,  
    error: null,  
};  

const contactsSlice = createSlice({  
    name: 'contacts',  
    initialState,  
    extraReducers: (builder) => {  
        builder  
            .addCase(fetchContacts.pending, (state) => {  
                state.isLoading = true;  
            })  
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {  
                state.isLoading = false;  
                state.items = payload;  
            })  
            .addCase(fetchContacts.rejected, (state, { payload }) => {  
                state.isLoading = false;  
                state.error = payload;  
            })  
            .addCase(addContact.pending, (state) => {  
                state.isLoading = true;  
            })  
            .addCase(addContact.fulfilled, (state, { payload }) => {  
                state.isLoading = false;  
                state.items.push(payload);  
            })  
            .addCase(addContact.rejected, (state, { payload }) => {  
                state.isLoading = false;  
                state.error = payload;  
            })  
            .addCase(deleteContact.pending, (state) => {  
                state.isLoading = true;  
            })  
            .addCase(deleteContact.fulfilled, (state, { payload }) => {  
                state.isLoading = false;  
                state.items = state.items.filter((contact) => contact.id !== payload);  
            })  
            .addCase(deleteContact.rejected, (state, { payload }) => {  
                state.isLoading = false;  
                state.error = payload;  
            })  
            .addCase(logOut.fulfilled, (state) => {  
                return initialState;   
            });  
    },  
});  

export default contactsSlice.reducer;