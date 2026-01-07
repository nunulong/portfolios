import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="title">
          <h1>Hi, I'm Ting Wang</h1>
          <h2>Software Engineer</h2>
          <a href="https://docs.google.com/document/d/1bR3q7Yl94M_iFColMktUy24fWwgioBxB/edit?usp=drive_link&ouid=107575394346975930226&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><h2>My Resume</h2></a>
        </div>
      </div>
    );
  }
}

export default Home;
