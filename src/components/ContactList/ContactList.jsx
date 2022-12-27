import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSlice';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { getFilter } from 'redux/contacts/filterSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  const currentFilter = useSelector(getFilter);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const delContactFn = e => {
    const id = e.currentTarget.id;
    dispatch(deleteContact(id));
  };

  const filtredContacts = () => {
    const toLowCaseFilter = currentFilter.toLocaleLowerCase();

    return items.filter(cont =>
      cont.name.toLowerCase().includes(toLowCaseFilter)
    );
  };

  return (
    <ul className={css.list}>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {filtredContacts().map(cont => (
        <li key={cont.id} className={css.item}>
          {cont.name}:<span className={css.number}>{cont.phone}</span>
          <button id={cont.id} onClick={delContactFn} className={css.delBtn}>
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
