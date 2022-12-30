import { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSlice';
import { addContact, updateContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const [nameCont, setNameCont] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);
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

    const inContactsName = items.find(el => el.name === nameCont);
    const inContactsPhone = items.find(el => el.number === number);
    // check : already in contacts
    if (inContactsName) {
      dispatch(
        updateContact({
          id: inContactsName.id,
          name: nameCont,
          number: number,
        })
      );
      setNumber('');
      setNameCont('');
      return;
    }
    if (inContactsPhone) {
      dispatch(
        updateContact({
          id: inContactsPhone.id,
          name: nameCont,
          number: number,
        })
      );
      setNumber('');
      setNameCont('');
      return;
    } else {
      // else add
      dispatch(addContact({ name: nameCont, number: number }));
    }

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
