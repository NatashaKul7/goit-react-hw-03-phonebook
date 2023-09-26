// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './App.styled';
import Form from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`Oops, the contact with name ${name} already exists`);
    }
    const newState = {
      id: nanoid(),
      name,
      number,
    };

    this.setState({
      contacts: [newState, ...this.state.contacts],
    });
  };

  handleDelete = contactName => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.name !== contactName
        ),
      };
    });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  // Record contacts in localeStorage

  componentDidUpdate(prevProps, prevState) { 
    if (this.state.contacts !== prevState.contacts) { 
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

    // Take contacts from localeStorage

  componentDidMount() { 
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) { 
      this.setState({contacts: parsedContacts})
    }
  }

  render() {
    const filteredContacts = this.filterContacts;
    const { filter } = this.state;
    
    return (
      <Container>
        <Form handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        {this.state.contacts.length === 0 ? (
          <h3>There are no any contacts here</h3>
        ) : (
          <>
            <Filter onChange={this.handleFilterChange} filter={filter} />
            <Contacts
              contacts={filteredContacts()}
              handleDelete={this.handleDelete}
            />
          </>
        )}
      </Container>
    );
  }
}
