import React from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { Routes, Route } from 'react-router-dom';    
import HomePage from './pages/HomePage';  
import ContactsPage from './pages/ContactsPage';  
import LoginPage from './pages/LoginPage';  
import RegistrationPage from './pages/RegistrationPage';  
import { checkAuthStatus } from './redux/auth/operations'; 

const App = () => {  
  const dispatch = useDispatch();  
  const isRefreshing = useSelector(state => state.auth.isRefreshing);  

  React.useEffect(() => {  
    dispatch(checkAuthStatus());  
  }, [dispatch]);  

  return (  
    <>  
      {isRefreshing ? (  
        <Loading />  
      ) : (  
        <Routes>  
          <Route path="/" element={<HomePage />} />  
          <Route path="/contacts" element={<ContactsPage />} />  
          <Route path="/login" element={<LoginPage />} />  
          <Route path="/registration" element={<RegistrationPage />} />  
        </Routes>  
      )}  
    </>  
  );  
};  

export default App;