import React, { Component } from 'react';
import './Projects.css';
import Carousel from '../Carousel/Carousel';

class Projects extends Component {
  render() {
    return (
      <div className="project">
        <Carousel />
      </div>
    );
  }
}

export default Projects;
