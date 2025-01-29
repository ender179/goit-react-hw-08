import { configureStore } from '@reduxjs/toolkit';  
import { persistStore, persistReducer } from 'redux-persist';  
import storage from 'redux-persist/lib/storage'; 
import authReducer from './auth/slice';  
import contactsReducer from './contacts/slice';  
import filtersReducer from './filters/slice'; 

const authPersistConfig = {  
  key: 'auth',  
  storage,  
  whitelist: ['token'], 
};  

const store = configureStore({  
  reducer: {  
    auth: persistReducer(authPersistConfig, authReducer),  
    contacts: contactsReducer,  
    filters: filtersReducer, 
  },  
  middleware: (getDefaultMiddleware) =>  
    getDefaultMiddleware({  
      serializableCheck: {  
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/PURGE', 'persist/REGISTER'],  
      },  
    }),  
});  

const persistor = persistStore(store);  

export { store, persistor }; 