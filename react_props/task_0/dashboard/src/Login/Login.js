
import React from 'react';
import './Login.css';


function App() {
  return (
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
  );
}

export default App;
