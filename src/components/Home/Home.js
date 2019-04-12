import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="title">
          <h1>Hi, I'm Ting Wang</h1>
          <h2>Software Engineer</h2>
          <a href="https://dl.airtable.com/.attachments/7ee301cb5ece9d1358003b1a16328d86/770c33a2/resume.pdf" target="_blank" rel="noopener noreferrer"><h2>My Resume</h2></a>
        </div>
      </div>
    );
  }
}

export default Home;
