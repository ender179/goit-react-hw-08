import React from 'react';  
import { Provider } from 'react-redux';  
import { PersistGate } from 'redux-persist/integration/react';  
import { BrowserRouter as Router } from 'react-router-dom';  
import { store, persistor } from './store'; // імпортуйте ваш store та persistor  
import AppRoutes from './AppRoutes'; // імпортуйте компоненти з вашими маршрутами або основний компонент  

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