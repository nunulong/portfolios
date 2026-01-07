import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="intro">
          <p>
            Hi, I'm Ting, and I'm joined by my wonderful wife, Angelina. As a software engineer, I specialize in crafting dynamic, clean, and user-friendly websites. I thrive on challenges and embrace projects that push me beyond my comfort zone, as learning new languages and development techniques is key to my growth and the success of the organizations I work with. I love every moment of this journey!
          </p>
          <p>
            I'm a dedicated family man, technology enthusiast, and thoughtful problem-solver. My expertise includes designing, testing, and developing applications, with a deep understanding of data structures and algorithms. I'm well-versed in front-end and back-end development best practices, bring hands-on experience in software troubleshooting, and maintain a proven track record of clear, thorough documentation to support future maintenance.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
