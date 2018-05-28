import React, { Component } from 'react';
import './Home.css';
import profile from '../../assets/profile.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={profile} alt="profile" />
        <div className="title">
          <h1>Hello, I'm Ting</h1>
          <h2>Software Engineer & Full-Stack Web Developer</h2>
          <a href="https://dl.airtable.com/ps0KJ1zwTX6q3AZT4FR4_ting_wang_resume.pdf" target="_blank" rel="noopener noreferrer"><h2>Find My Resume</h2></a>
        </div>
      </div>
    );
  }
}

export default Home;
