import { createSlice } from '@reduxjs/toolkit';  
import {  
    fetchContacts,  
    addContact,  
    deleteContact,  
    logOut,  
} from '../auth/operations';  

const contactsSlice = createSlice({  
    name: 'contacts',  
    initialState: {  
        items: [],  
        loading: false,  
        error: null,  
    },  
    reducers: {  
    },  
    extraReducers: (builder) => {  
        builder  
            .addCase(fetchContacts.pending, (state) => {  
                state.loading = true;  
            })  
            .addCase(fetchContacts.fulfilled, (state, action) => {  
                state.loading = false;  
                state.items = action.payload;  
            })  
            .addCase(fetchContacts.rejected, (state, action) => {  
                state.loading = false;  
                state.error = action.payload;  
            });  
    },  
});  

export const { actions, reducer } = contactsSlice;