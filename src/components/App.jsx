import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';
//
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const includeName = name => {
      return this.state.contacts.find(
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

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = e => {
    const id = e.currentTarget.id;

    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(el => el.id !== id)],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filtredContacts = () => {
    const { contacts, filter } = this.state;

    const toLowCaseFilter = filter.toLocaleLowerCase();

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(toLowCaseFilter)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={css.appStyle}>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2 className={css.title}>Contacts</h2>

        <Filter value={filter} changeFilter={this.changeFilter} />

        <ContactList
          contacts={this.filtredContacts()}
          deleteCont={this.deleteContact}
        />
      </div>
    );
  }
}
