import React, { useEffect } from 'react';  
import { Route, Routes } from 'react-router-dom';  
import { useDispatch, useSelector } from 'react-redux';  
import HomePage from './pages/HomePage/HomePage';  
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';  
import LoginPage from './pages/LoginPage/LoginPage';  
import ContactsPage from './pages/ContactsPage/ContactsPage';  
import Layout from './Layout'; 
import { checkAuthStatus } from './redux/auth/authActions'; 

const App = () => {  
  const dispatch = useDispatch();  
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  useEffect(() => {  
    dispatch(checkAuthStatus());  
  }, [dispatch]);  

  return (  
    <Layout>  
      {isRefreshing ? (  
        <p>Loading...</p> 
      ) : (  
        <Routes>  
          <Route path="/" element={<HomePage />} />  
          <Route path="/register" element={<RegistrationPage />} />  
          <Route path="/login" element={<LoginPage />} />  
          <Route path="/contacts" element={<ContactsPage />} />  
        </Routes>  
      )}  
    </Layout>  
  );  
};  

export default App;