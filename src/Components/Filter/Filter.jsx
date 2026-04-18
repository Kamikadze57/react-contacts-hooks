import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  return (
    <div className="filter__box">
      <h2 className="contacts__title">Contacts</h2>
      <label className="filter__label">
        <p>Find by name</p>
        <input 
          className="filter__input" 
          type="text" 
          value={filterValue} 
          onChange={(e) => dispatch(setFilter(e.target.value))} 
        />
      </label>
    </div>
  );
};

export default Filter;