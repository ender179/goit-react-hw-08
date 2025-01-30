import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';
import styles from './PrivateRoute.module.css';

const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return !isLoggedIn && !isRefreshing ? <Navigate to="/login" /> : <Component />;
};

export default PrivateRoute;