import { createSlice } from '@reduxjs/toolkit';  
import { fetchContacts, addContact, deleteContact, logOut } from './operations';  

const initialState = {  
  items: [],  
  isLoading: false,  
  error: null,  
  deletingIds: [],  
};  

const contactsSlice = createSlice({  
  name: 'contacts',  
  initialState,  
  reducers: {},  
  extraReducers: (builder) => {  
    builder  
      .addCase(fetchContacts.pending, (state) => {  
        state.isLoading = true;  
      })  
      .addCase(fetchContacts.fulfilled, (state, action) => {  
        state.isLoading = false;  
        state.items = action.payload;  
      })  
      .addCase(fetchContacts.rejected, (state, action) => {  
        state.isLoading = false;  
        state.error = action.payload || 'Failed to load contacts';  
      })  
      .addCase(addContact.pending, (state) => {  
        state.isLoading = true;  
      })  
      .addCase(addContact.fulfilled, (state, action) => {  
        state.isLoading = false;  
        state.items.push(action.payload);  
      })  
      .addCase(addContact.rejected, (state, action) => {  
        state.isLoading = false;  
        state.error = action.payload || 'Failed to add contact';  
      })  
      .addCase(deleteContact.pending, (state, action) => {  
        state.deletingIds.push(action.meta.arg);  
      })  
      .addCase(deleteContact.fulfilled, (state, action) => {  
        state.items = state.items.filter(contact => contact.id !== action.payload);  
        state.deletingIds = state.deletingIds.filter(id => id !== action.meta.arg);  
      })  
      .addCase(deleteContact.rejected, (state, action) => {  
        state.deletingIds = state.deletingIds.filter(id => id !== action.meta.arg);  
        state.error = action.payload || 'Failed to delete contact';  
      })  
      // Додано очищення стану контактів при виході  
      .addCase(logOut.fulfilled, (state) => {  
        state.items = [];  
        state.error = null; // Скидання помилки (якщо потрібно)  
      });  
  },  
});  

export default contactsSlice.reducer;