import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  changeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.props.addContact(contact);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="nameInput" className={styles.contactLabel}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            placeholder="enter name..."
            onChange={this.changeHandler}
            id="nameInput"
            className={styles.contactInput}
          />
        </label>

        <label htmlFor="numberInput" className={styles.contactLabel}>
          Number:
          <input
            className={styles.contactInput}
            type="tel"
            name="number"
            value={number}
            placeholder="enter number..."
            onChange={this.changeHandler}
            id="numberInput"
          />
        </label>
        <button
          type="submit"
          disabled={!name.length || !number.length}
          className={styles.contactBtn}
        >
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;
