import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { AppProvider } from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  body: {},
  app: {
    textAlign: 'center',
    paddingTop: '4rem',
  },
});

const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.get('isUserLoggedIn'),
  displayDrawer: state.uiReducer.get('isNotificationDrawerVisible'),
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

const App = ({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer }) => {
  return (
    <AppProvider>
      <>
        <Notifications displayDrawer={displayDrawer} />
        <div className={css(styles.app, styles.body)}>
          <Header />
          <BodySectionWithMarginBottom title="Course list">
            <CourseList />
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
    </AppProvider>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
