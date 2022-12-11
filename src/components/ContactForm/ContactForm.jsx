import { useState } from 'react';
//
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
//
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const [nameCont, setNameCont] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

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

  const handleChange = e => {
    const event = e.target;

    if (event.type === 'text') {
      setNameCont(event.value);
    }
    if (event.type === 'tel') {
      setNumber(event.value);
    }
  };

  const onSubmitEvt = e => {
    e.preventDefault();

    addCont(nameCont, number);

    setNumber('');
    setNameCont('');
  };

  return (
    <form onSubmit={onSubmitEvt} className={css.form}>
      <label>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={nameCont}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <label>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          value={number}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <br />
      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
