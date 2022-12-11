import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteCont } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const currentFilter = useSelector(getFilter);

  const deleteContact = e => {
    const id = e.currentTarget.id;
    dispatch(deleteCont(id));
  };

  const filtredContacts = () => {
    const toLowCaseFilter = currentFilter.toLocaleLowerCase();

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(toLowCaseFilter)
    );
  };

  return (
    <ul className={css.list}>
      {filtredContacts().map(cont => (
        <li key={cont.id} className={css.item}>
          {cont.name}:<span className={css.number}>{cont.number}</span>
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
