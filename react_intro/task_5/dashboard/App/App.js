
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';
import logo from '../dist/holberton_logo.jpeg';

function App() {
  return (
    <div className='App'>
        <header className="App-header">
          <img src={logo} alt='Holberton Logo'/>
          <p>School Dashboard</p>
        </header>
        <body className='App-body'>
          <p>Login to access the full dashboard</p>
        <div className="input-wrapper">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
          <button>OK</button>
        </div>
        </body>
        <footer className='App-footer'>
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
    </div>
  );
}

export default App;
