import React, { Component } from 'react';
import ContactForm from './Contact/Contact';
import ContactList from './ContactList/ContactList';  
import FilterContacts from './FilterContact/FilterContacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    search: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  addContact = newContact => {
    const { contacts } = this.state;

    // Check if the contact already exists
    const contactExists = contacts.some(
      contact => contact.name === newContact.name
    );

    if (!contactExists) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      alert('The contact is already in the phonebook');
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleSearchChange = value => {
    this.setState({ search: value });
  };

  render() {
    const { contacts, search } = this.state;

    // Filter contacts based on search input
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
        <ContactForm addContact={this.addContact} />

        <FilterContacts
          value={this.state.search}
          onChange={this.handleSearchChange}
        />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export { App };