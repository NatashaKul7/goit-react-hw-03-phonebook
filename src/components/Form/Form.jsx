import { Component } from 'react';
import { FormBox } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const contactData = {
      name: this.state.name,
      number: this.state.number,
    };

    this.props.handleAddContact(contactData);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <FormBox onSubmit={this.handleSubmit}>
        <h1>Phonebook</h1>
        <label htmlFor="nameId"></label>
        <p>Name</p>
        <input
          type="text"
          value={this.state.name}
          name="name"
          placeholder="Gomez Simpson"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          id="nameId"
        />
        <label htmlFor="numberId"></label>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          placeholder="777-77-77"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          id="numberId"
        />
        <button type="submit">Add contact</button>
      </FormBox>
    );
  }
}

export default Form;
