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
        </div>
      </div>
    );
  }
}

export default Home;
