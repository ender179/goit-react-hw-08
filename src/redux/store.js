import { configureStore } from '@reduxjs/toolkit';  
import { persistStore, persistReducer } from 'redux-persist';  
import storage from 'redux-persist/lib/storage';  
import authReducer from './auth/authSlice';  
import contactsReducer from './contacts/contactsSlice';  
import filtersReducer from './filters/filtersSlice';  

const authPersistConfig = {  
  key: 'auth',  
  storage,  
  whitelist: ['token'], // список полів, які потрібно зберігати  
};  

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);  

const store = configureStore({  
  reducer: {  
    auth: persistedAuthReducer,  
    contacts: contactsReducer,  
    filters: filtersReducer,  
  },  
  middleware: getDefaultMiddleware =>   
    getDefaultMiddleware({  
      serializableCheck: {  
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],  
      },  
    }),  
});  

export const persistor = persistStore(store);  
export default store;