import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
        <Form>
          <label>
            Name:
            <Field name="name" type="text" />
          </label>
          <label>
            Email:
            <Field name="email" type="email" />
          </label>
          <label>
            Password:
            <Field name="password" type="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;