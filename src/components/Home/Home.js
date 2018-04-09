import React, { Component } from 'react';
import './Home.css';
import profile from '../../assets/profile.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={profile} alt="profile" />
        <div>
          <h1>Hello, I'm Ting</h1>
          <h2>Software developer/Web developer</h2>
        </div>
      </div>
    );
  }
}

export default Home;
