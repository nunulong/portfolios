import React, { Component } from 'react';
import './Footer.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="copyright">&copy; 2018 Ting Wang</div>
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
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
