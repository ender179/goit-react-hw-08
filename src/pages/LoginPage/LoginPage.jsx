import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        <Form>
          <label>
            Email:
            <Field name="email" type="email" />
          </label>
          <label>
            Password:
            <Field name="password" type="password" />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;