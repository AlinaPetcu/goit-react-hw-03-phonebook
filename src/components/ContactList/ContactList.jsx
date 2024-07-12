import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.deleteContact(id);
  }

  render() {
    const { contacts } = this.props;

    return (
      <div className={css.listContainer}>
        <h2 className={css.contactName}>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li className={css.contactItem} key={contact.id}>
              {contact.name} : {contact.number}
              <button
                className={css.deleteButton}
                type="button"
                onClick={() => this.handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;