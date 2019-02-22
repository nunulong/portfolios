import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="navwrapper">
        <NavLink
          className="navlink"
          exact
          to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: '#ff8000'
          }}
        >
          Home
        </NavLink>
        <NavLink
          className="navlink"
          to="/about"
          activeStyle={{
            fontWeight: 'bold',
            color: '#ff8000'
          }}
        >
          About
        </NavLink>
        <NavLink
          className="navlink"
          to="/projects"
          activeStyle={{
            fontWeight: 'bold',
            color: '#ff8000'
          }}
        >
          Projects
        </NavLink>
        <NavLink
          className="navlink"
          to="/skills"
          activeStyle={{
            fontWeight: 'bold',
            color: '#ff8000'
          }}
        >
          Skills
        </NavLink>
        <NavLink
          className="navlink"
          to="/contact"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >
          Contact
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
