import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
//
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts') ?? [])
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
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
    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = e => {
    const id = e.currentTarget.id;

    setContacts(prevState => [...prevState.filter(el => el.id !== id)]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const filtredContacts = () => {
    const toLowCaseFilter = filter.toLocaleLowerCase();

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(toLowCaseFilter)
    );
  };

  return (
    <div className={css.appStyle}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm addCont={addContact} />

      <h2 className={css.title}>Contacts</h2>

      <Filter value={filter} changeFilter={changeFilter} />

      <ContactList contacts={filtredContacts()} deleteCont={deleteContact} />
    </div>
  );
};
