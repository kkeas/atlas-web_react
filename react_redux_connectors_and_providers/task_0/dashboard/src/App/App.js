import React, { useContext, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { AppContext, AppProvider } from './AppContext';
import { connect } from 'react-redux'; // Import connect from react-redux

const styles = StyleSheet.create({
  body: {},
  app: {
    textAlign: 'center',
    paddingTop: '4rem',
  },
});

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isUserLoggedIn
  };
};

const App = ({ isLoggedIn }) => {
  const [listNotifications, setListNotifications] = useState([]);

  const markNotificationAsRead = (id) => {
    const updatedNotifications = listNotifications.filter(
      (notification) => notification.id !== id
    );

    setListNotifications(updatedNotifications);
  };

  const { user, logOut } = useContext(AppContext);

  return (
    <AppProvider>
      <>
        <Notifications
          listNotifications={listNotifications}
          markNotificationAsRead={markNotificationAsRead}
        />
        <div className={css(styles.app, styles.body)}>
          <Header />
          <BodySectionWithMarginBottom title="Course list">
            <CourseList />
          </BodySectionWithMarginBottom>
          {isLoggedIn ? null : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Some random text for the news...</p>
          </BodySection>
          <Footer />
        </div>
      </>
    </AppProvider>
  );
};

export default connect(mapStateToProps)(App);
