import React, { Component } from 'react';
import './Resume.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faNode } from '@fortawesome/fontawesome-free-brands';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div>
          <h1>Skill Sets</h1>
          <div className="card">
            <FontAwesomeIcon icon={faNode} />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
