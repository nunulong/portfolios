import React, { useState } from 'react';
import { Mail, Check, Copy, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'felix.wang.1026@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="contact-wrapper">
      <div className="container">
        {/* Header */}
        <div className="page-intro">
          <h1>Let's Get in Touch</h1>
          <p>Send me a message or connect through direct channels.</p>
        </div>

        {/* Contact Card */}
        <div className="contact-card-modern">
          {/* Direct Email with One-Click Copy */}
          <div className="contact-direct-strip">
            <a href={`mailto:${email}`} className="direct-mail-text">
              <Mail size={18} />
              <span>{email}</span>
            </a>

            <button
              onClick={copyEmail}
              className={`copy-pill-btn ${copied ? 'copied' : ''}`}
              aria-label="Copy email address"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Formspree Form */}
          <form
            className="contact-form-modern"
            action="https://formspree.io/felix.wang.1026@gmail.com"
            method="POST"
          >
            <div className="field-group">
              <label htmlFor="name" className="field-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
                className="field-input"
              />
            </div>

            <div className="field-group">
              <label htmlFor="email" className="field-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="_replyto"
                placeholder="your.email@example.com"
                autoComplete="email"
                required
                className="field-input"
              />
            </div>

            <div className="field-group">
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="What would you like to discuss?"
                autoComplete="text"
                required
                className="field-textarea"
              />
            </div>

            <button type="submit" className="btn btn-primary contact-submit-btn">
              <span>Send Message</span>
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
