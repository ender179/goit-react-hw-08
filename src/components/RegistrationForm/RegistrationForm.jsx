import React from 'react';  
import * as Yup from 'yup';  
import { useDispatch } from 'react-redux';  
import { register } from '../../redux/auth/operations'; 
import { Link } from 'react-router-dom';  
import styles from './RegistrationForm.module.css';  

const RegistrationForm = () => {  
    const dispatch = useDispatch();  

    const handleSubmit = async (values) => {  
        try {  
            await dispatch(register(values));  
        } catch (error) {  
            console.error(error);  
        }  
    };  

    return (  
        <form onSubmit={handleSubmit} className={styles.registrationForm}>  
            <button type="submit">Зарегистрироваться</button>  

            <Link to="/login">Уже есть аккаунт? Войдите</Link>  
        </form>  
    );  
};  

export default RegistrationForm;