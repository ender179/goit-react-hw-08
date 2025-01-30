import React from 'react';  
import { NavLink } from 'react-router-dom';  
import { useSelector } from 'react-redux';  
import styles from './Navigation.module.css';  

const Navigation = () => {  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);  

  return (  
    <nav>  
      <NavLink to="/" className={styles.link}>  
        Home  
      </NavLink>  
      {isLoggedIn && (  
        <NavLink to="/contacts" className={styles.link}>  
          Contacts  
        </NavLink>  
      )}  
      {!isLoggedIn && (  
        <NavLink to="/login" className={styles.link}>  
          Login  
        </NavLink>  
      )}  
      {isLoggedIn && (  
        <NavLink to="/logout" className={styles.link}>  
          Logout  
        </NavLink>  
      )}  
    </nav>  
  );  
};  

export default Navigation;