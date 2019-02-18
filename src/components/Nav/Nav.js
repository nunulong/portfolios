import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleScroll = () => {
    const navItem = document.querySelector('.navwrapper');
    this.setState({
      height: navItem.offsetHeight
    });
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const navItem = document.querySelector('.navwrapper');
    this.setState({
      top: navItem.offsetTop,
      height: navItem.offsetHeight
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll + this.state.currTop < this.state.top ?
      document.body.style.paddingTop = `${this.state.height}px` :
      document.body.style.paddingTop = 0;
  }

  render() {
    return (
      <div className={this.state.scroll > this.state.top ? "navwrapper fixed-nav" : "navwrapper"}>
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
  }
}

export default Nav;
