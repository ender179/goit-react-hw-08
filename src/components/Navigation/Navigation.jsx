import { NavLink } from 'react-router-dom';  
import { useSelector, useDispatch } from 'react-redux';   
import { logout } from '../redux/auth/slice'; 
import styles from './Navigation.module.css';  

const Navigation = () => {  
    const dispatch = useDispatch();  
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);  

    const handleLogout = () => {  
        dispatch(logout());  
    };  

    return (  
        <nav className={styles.nav}>  
            <NavLink to="/">Home</NavLink>  
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}  
            {isLoggedIn ? (  
                <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>  
            ) : (  
                <NavLink to="/login">Login</NavLink>  
            )}  
        </nav>  
    );  
};  

export default Navigation;