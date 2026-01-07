import React, { Component } from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faSass,
  faNodeJs,
  faPython,
  faJava,
} from '@fortawesome/free-brands-svg-icons';
import { faGem, faDatabase } from '@fortawesome/free-solid-svg-icons';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div className="resume-header">
          <h2>What I'm hacking</h2>
          <h5>Skills to get your idea off the ground</h5>
        </div>
        <div className="resume-container">
          <div className="card-container">
            <div className="card">
              <h1>Front-End Development</h1>
              <p className="intro">
                Launching website on the internet is exciting but fairly tough.
                I've developed my skills to deliver the best experience, whether
                it is on the desktop or a mobile device. I've been equipped with
                these powerful tools:
              </p>
              <div className="icon-wrapper">
                <div className="resume-icon">
                  <FontAwesomeIcon icon={faReact} />
                  <p>React</p>
                </div>
                <div className="resume-icon">
                  <FontAwesomeIcon icon={faJs} />
                  <p>JavaScript</p>
                </div>
                <div className="resume-icon">
                  <FontAwesomeIcon icon={faHtml5} />
                  <p>HTML5</p>
                </div>
                <div className="resume-icon">
                  <FontAwesomeIcon icon={faCss3} />
                  <p>CSS3</p>
                </div>
                <div className="resume-icon">
                  <FontAwesomeIcon icon={faSass} />
                  <p>SASS</p>
                </div>
              </div>
            </div>
            <div className="card">
              <h1>Back-End Development</h1>
              <p className="intro">What makes the front-end of a website possible? This is where the back-end comes in. I've always been fascinated with back-end development because I love manipulating data. I've been equipped with these powerful tools: </p>
              <div className="icon-wrapper">
                <div className="resume-icon">
                  <FontAwesomeIcon icon={faJava} />
                  <p>Java</p>
                </div>
                <div className="resume-icon">
                  <FontAwesomeIcon icon={faNodeJs} />
                  <p>NodeJS</p>
                </div>
                <div className="resume-icon">
                  <FontAwesomeIcon icon={faPython} />
                  <p>Python</p>
                </div>
                <div className="resume-icon">
                  <FontAwesomeIcon icon={faDatabase} />
                  <p>MySQL</p>
                </div>
                <div className="resume-icon">
                  <FontAwesomeIcon icon={faDatabase} />
                  <p>MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
