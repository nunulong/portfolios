import React, { Component } from 'react';
import './Home.css';
import profile from '../../assets/profile.png';

class Home extends Component {
  render() {
    return (
      <div className="homewrapper">
        <div className="greeting">
          <img src={profile} alt="profile" />
          <h1>Hello, I'm Ting</h1>
          <h2>Software developer/Web developer</h2>
        </div>
        <p className="bio">
          My name is Ting Wang and I am a full stack web developer who
          specializes in creating dynamic and clean web pages. I enjoy being
          challenged and engaging with projects that require me to work outside
          my comfort and knowledge set, as continuing to learn new languages and
          development techniques are important to me and the success of the
          organization and I have been loving every minute of it. I am a
          developer, and overall a thinker. I am skilled in designing, testing,
          and developing application, thoroughly understanding of data
          structures and algorithms, knowledgeable of front-end/back-end
          development best practices, hands-on software troubleshooting
          experience, and proven track record of proper documentation for future
          maintenance.
        </p>
      </div>
    );
  }
}

export default Home;
