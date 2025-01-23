import React from 'react';  
import { Provider } from 'react-redux';  
import { PersistGate } from 'redux-persist/integration/react';  
import { BrowserRouter as Router } from 'react-router-dom';  
import { store, persistor } from './store'; 
import AppRoutes from './AppRoutes';  
import AuthNav from './components/AuthNav';

const App = () => (  
    <Provider store={store}>  
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>  
            <Router>  
                <AppRoutes />  
            </Router>  
        </PersistGate>  
    </Provider>  
);  

export default App;