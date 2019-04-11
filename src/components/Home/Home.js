import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="title">
          <h1>Hi, I'm Ting Wang</h1>
          <h2>Software Engineer</h2>
          <a href="https://dl.airtable.com/.attachments/9b83be7d1d69f189cede4a2d3e8e92ec/adc9d895/resume.pdf" target="_blank" rel="noopener noreferrer"><h2>My Resume</h2></a>
        </div>
      </div>
    );
  }
}

export default Home;
