import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div className="navwrapper">
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
    </div>
  );
};

export default Nav;
