import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    const d = new Date();
    let year = d.getFullYear();
    return (
      <div className="footer">
        <div className="copyright">&copy; {year} By Ting Wang</div>
        <div className="social">
          <a
            className="icon"
            href="https://github.com/nunulong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/ting-wang-3125a74b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
