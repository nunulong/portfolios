import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
      >
        Projects
      </NavLink>
      <NavLink
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
