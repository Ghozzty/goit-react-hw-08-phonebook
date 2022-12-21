import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteCont } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operations';
// import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  // const { items, isLoading, error } = useSelector(getTasks);
  // const currentFilter = useSelector(getFilter);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContact = e => {
    const id = e.currentTarget.id;
    dispatch(deleteCont(id));
  };

  // const filtredContacts = () => {
  //   const toLowCaseFilter = currentFilter.toLocaleLowerCase();

  //   return contacts.filter(cont =>
  //     cont.name.toLowerCase().includes(toLowCaseFilter)
  //   );
  // };
  //{filtredContacts().map(cont => (

  return (
    <ul className={css.list}>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {items.map(cont => (
        <li key={cont.id} className={css.item}>
          {cont.name}:<span className={css.number}>{cont.phone}</span>
          <button id={cont.id} onClick={deleteContact} className={css.delBtn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  currentFilter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
