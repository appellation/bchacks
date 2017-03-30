import React, { Component } from 'react';
import logo from '../logo.svg';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item">
            <img src={logo} alt="BC Hacks"/>
          </a>
        </div>
        <div className="nav-center">
          <span className="nav-item is-unselectable">BC Hacks</span>
        </div>
        <div className="nav-right nav-menu">
          <a className="nav-item">Register</a>
        </div>
      </nav>
    );
  }
}

export default Nav;
