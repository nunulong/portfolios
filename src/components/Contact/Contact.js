import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>Let's get in touch</h1>
        <form className="form-container">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your first name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email.."
          />

          <label htmlFor="text">Text</label>
          <textarea type="" id="text" name="text" placeholder="Your words.." />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
