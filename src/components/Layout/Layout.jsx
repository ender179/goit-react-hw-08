import React, { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import AppBar from '../AppBar/AppBar';  
import { fetchData } from '../../redux/operations';  
import { selectIsRefreshing } from '../../redux/selectors';  
import css from './Layout.module.css';  

const Layout = ({ children }) => {  
    const dispatch = useDispatch();  
    const isRefreshing = useSelector(selectIsRefreshing);  

    useEffect(() => {  
        dispatch(fetchData());   
    }, [dispatch]);  

    return (  
        <div className={css.container}>  
            <AppBar />  
            {isRefreshing ? (  
                <div>Loading...</div>   
            ) : (  
                children   
            )}  
        </div>  
    );  
};  

export default Layout;