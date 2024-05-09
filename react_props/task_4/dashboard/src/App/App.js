import './App.css';
import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';

function App() {
  return (
    <>
    <Notifications />
    <Header />
    <Login />
    <Footer />
    </>
  );
}

export default App;
