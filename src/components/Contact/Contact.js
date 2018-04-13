import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      text: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="contact">
        <h1>Let's get in touch</h1>
        <form className="form-container">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            placeholder="Your first name.."
            onChange={this.handleChange}
            value={this.state.firstName}
            autoComplete="first-name"
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            placeholder="Your last name.."
            onChange={this.handleChange}
            value={this.state.lastName}
            autoComplete="last-name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email.."
            onChange={this.handleChange}
            value={this.state.email}
            autoComplete="email"
          />

          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            name="text"
            placeholder="Your words.."
            onChange={this.handleChange}
            value={this.state.text}
            autoComplete="text"
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
