import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
//
import { nanoid } from 'nanoid';
//
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  addContact,
  deleteCont,
  setFilter,
  getFilter,
} from 'redux/contactsSlice';
//
import css from './App.module.css';
import PropTypes from 'prop-types';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const currentFilter = useSelector(getFilter);
  //
  const addCont = (name, number) => {
    const includeName = name => {
      return contacts.find(
        elem => elem.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );
    };

    const contact = {
      id: nanoid(10),
      name,
      number,
    };

    if (includeName(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    dispatch(addContact(contact));
  };

  const deleteContact = e => {
    const id = e.currentTarget.id;
    dispatch(deleteCont(id));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const filtredContacts = () => {
    const toLowCaseFilter = currentFilter.toLocaleLowerCase();

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(toLowCaseFilter)
    );
  };
  //
  return (
    <div className={css.appStyle}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm addCont={addCont} />

      <h2 className={css.title}>Contacts</h2>

      <Filter value={currentFilter} changeFilter={changeFilter} />

      <ContactList contacts={filtredContacts()} deleteCont={deleteContact} />
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  currentFilter: PropTypes.string,
};
