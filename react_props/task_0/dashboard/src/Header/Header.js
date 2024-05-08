
import React from 'react';
import './Header.css';
import logo from '../assests/holberton_logo.jpeg';

function Header() {
  return (
        <header className="App-header">
          <img src={logo} alt='Holberton Logo'/>
          <p>School Dashboard</p>
        </header>
  );
}

export default Header;
