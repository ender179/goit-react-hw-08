import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './RestrictedRoute.module.css';

const RestrictedRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" /> : <Component />;
};

export default RestrictedRoute;