import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import styles from './Layout.module.css';

const Layout = () => (
  <div className={styles.layout}>
    <AppBar />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;