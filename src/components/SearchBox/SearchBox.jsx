import { useDispatch, useSelector } from 'react-redux';  
import { changeFilter } from '../../redux/filters/Slice';  
import { selectFilterValueByName } from '../../redux/filters/selectors'; // Используем правильный селектор  
import styles from './SearchBox.module.css';  

const SearchBox = () => {  
  const dispatch = useDispatch();  
  // Замените 'name' на реальное имя фильтра, который вам нужен  
  const filter = useSelector(state => selectFilterValueByName(state, 'name')); // Используем селектор и передаём имя фильтра  

  const handleChange = e => {  
    dispatch(changeFilter(e.target.value.toLowerCase()));  
  };  

  return (  
    <div className={styles.searchBox}>  
      <label htmlFor="search" className={styles.label}>  
        Find contacts by name  
      </label>  
      <input  
        id="search"  
        name="search"  
        type="text"  
        value={filter}  
        onChange={handleChange}  
        className={styles.input}  
        autoComplete="off"  
      />  
    </div>  
  );  
};  

export default SearchBox;