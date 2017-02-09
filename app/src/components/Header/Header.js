import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = () => (
  <div className="Header">
    <img src={logo} className="Logo" alt="logo" />
    <h2>Welcome to React Training</h2>
    <p className="Sub-Title">Let's build a simple ToDo App</p>
  </div>
);

export default Header;
