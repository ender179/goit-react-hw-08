import React from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1>Welcome to the Contact Book App</h1>
      <p>Manage your contacts easily and securely.</p>
    </div>
  );
};

export default HomePage;