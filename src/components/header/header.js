import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h1>RESTy</h1>
      <nav>
        <NavLink activeClassName="selected" to="/">Home</NavLink>
        <NavLink activeClassName="selected" to="/history">History</NavLink>
      </nav>
    </header>
  )
}

export default Header;

