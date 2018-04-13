import React, { Component } from 'react';
import './Resume.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faSass,
  faNode,
  faPython
} from '@fortawesome/fontawesome-free-brands';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div className="header">
          <div className="header-text">
            <h1>What I'm hacking</h1>
            <h3>Skills to get your idea off the ground</h3>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card front-end">
            <h1>Front-End Development</h1>
            <p>What I know ...</p>
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faSass} />
          </div>
          <div className="card back-end">
            <h1>Back-End Development</h1>
            <p>What I know ...</p>
            <FontAwesomeIcon icon={faNode} />
            <FontAwesomeIcon icon={faPython} />
            <FontAwesomeIcon />
            <FontAwesomeIcon />
            <FontAwesomeIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
