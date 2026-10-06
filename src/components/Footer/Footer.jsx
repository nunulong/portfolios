import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-clean">
      <div className="container footer-inner">
        <div className="footer-copy">
          &copy; {year} Ting Wang
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/nunulong"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ting-wang-3125a74b/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:felix.wang.1026@gmail.com"
            className="footer-social-link"
            aria-label="Email Contact"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
