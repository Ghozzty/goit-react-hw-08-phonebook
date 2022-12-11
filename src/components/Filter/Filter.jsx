import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(getFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.findForm}>
      <p className={css.title}>Find contacts by name</p>
      <input
        type="text"
        value={currentFilter}
        onChange={changeFilter}
        className={css.input}
      />
    </label>
  );
};
