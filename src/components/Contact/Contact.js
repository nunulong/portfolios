import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: '',
    //   email: '',
    //   text: ''
    // };
  }

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // handSubmit = e => {
  //   e.preventDefault();
  //   this.setState(() => {
  //     return {
  //       name: '',
  //       email: '',
  //       text: ''
  //     };
  //   });
  // };

  render() {
    return (
      <div className="contact">
        <h1>Let's get in touch</h1>
        <form
          className="form-container"
          action="https://formspree.io/felix.wang.1026@gmail.com"
          method="POST"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            autoComplete="name"
            required
          />

          <label htmlFor="_replyto">Email</label>
          <input
            type="text"
            id="email"
            name="_replyto"
            placeholder="Your email.."
            autoComplete="email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message.."
            autoComplete="text"
            required
          />

          <input type="submit" value="Send Message" />
        </form>
      </div>
    );
  }
}

export default Contact;
