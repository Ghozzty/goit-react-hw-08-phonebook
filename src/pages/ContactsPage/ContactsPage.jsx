import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={css.appStyle}>
      <h1 className={css.title}>Phonebook~HW_8</h1>

      <ContactForm />

      <h2 className={css.title}>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
};

export default ContactsPage;
