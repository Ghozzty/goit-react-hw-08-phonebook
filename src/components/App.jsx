import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.appStyle}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm />

      <h2 className={css.title}>Contacts my_hw_07</h2>

      <Filter />

      <ContactList />
    </div>
  );
};
