import React, { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { fetchContacts } from '../../redux/contacts/operations';  
import { selectContacts, selectIsLoading, selectError } from '../../redux/contacts/selectors';  
import AppBar from '../../components/AppBar/AppBar'; 
import AuthNav from '../../components/AuthNav/AuthNav'; 
import Navigation from '../../components/Navigation/Navigation';  
import UserMenu from '../../components/UserMenu/UserMenu'; 
import styles from './ContactsPage.module.css'; 

const ContactsPage = () => {  
  const dispatch = useDispatch();  
  const contacts = useSelector(selectContacts);  
  const isLoading = useSelector(selectIsLoading);  
  const error = useSelector(selectError);  

  useEffect(() => {  
    dispatch(fetchContacts());  
  }, [dispatch]);  

  return (  
    <div className={styles.container}>  
      <AppBar />   
      <AuthNav />   
      <Navigation />   
      <UserMenu /> 
      <h1>Your Contacts</h1>  
      <ContactForm />  
      <Filter />  
      {isLoading && <p>Loading...</p>}  
      {error && <p>{error}</p>}  
      <ContactList contacts={contacts} />  
    </div>  
  );  
};  

export default ContactsPage;