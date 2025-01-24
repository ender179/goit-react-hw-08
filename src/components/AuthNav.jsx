import React from 'react';  
import { NavLink } from 'react-router-dom';  

const AuthNav = () => {  
  return (  
    <nav>  
      <NavLink to="/login" activeClassName="active-link">Login</NavLink>  
      <NavLink to="/register" activeClassName="active-link">Register</NavLink>  
    </nav>  
  );  
};  

export default AuthNav;