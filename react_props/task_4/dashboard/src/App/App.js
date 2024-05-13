import './App.css';
import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList.js';
import PropTypes from 'prop-types';


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
