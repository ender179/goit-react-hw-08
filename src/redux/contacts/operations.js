import { createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  

const api = axios.create({  
  baseURL: 'https://connections-api.go.dev',  
});  

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {  
  const { data } = await api.get('/contacts');  
  return data;  
});  

export const addContact = createAsyncThunk('contacts/add', async (contact) => {  
  const { data } = await api.post('/contacts', contact);  
  return data;  
});  

export const deleteContact = createAsyncThunk('contacts/delete', async (id) => {  
  await api.delete(`/contacts/${id}`);  
  return id;  
});