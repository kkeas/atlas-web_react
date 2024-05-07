import logo from './dashboard/holberton_logo.jpeg';
import React from 'react';

function App() {
  return (
    <>
        <header className="App-header">
          <img src={logo} alt='Holberton Logo'/>
          School Dashboard
        </header>
        <body className='App-body'>
          <p>Login to access the full dashboard</p>
        </body>
        <footer>
          <p>Copyright 2024 - holberton School</p>
        </footer>
    </>
  );
}

export default App;
