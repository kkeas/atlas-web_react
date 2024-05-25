
import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends Component {
  constructor(props) {
    super(props);

    // Create the listCourses array
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    // Create the listNotifications array
    this.listNotifications = [
      { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'Value 1' },
      // Add more notifications as needed
    ];

    // Add lifecycle for keyboard event
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const { logOut } = this.props;

    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  render() {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />

          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={this.listCourses} />
          </BodySectionWithMarginBottom>

          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>

          <BodySection title="News from the School">
            <p>Some random text for the news...</p>
          </BodySection>

          <Footer />
        </div>
      </>
    );
  }
}

export default App;
