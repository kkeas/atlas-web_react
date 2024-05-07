import logo from './holberton_logo.jpeg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
        <header className="App-header">
          <img src={logo} alt='Holberton Logo'/>
          <p>School Dashboard</p>
        </header>
        <body className='App-body'>
          <p>Login to access the full dashboard</p>
        </body>
        <footer className='App-footer'>
          <p>Copyright 2020 - holberton School</p>
        </footer>
    </div>
  );
}

export default App;
