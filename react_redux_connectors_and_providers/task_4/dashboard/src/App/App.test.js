import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains Notifications, Header, Login, and Footer components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
    expect(wrapper.find('Header')).toHaveLength(1);
    expect(wrapper.find('Login')).toHaveLength(1);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('passes displayDrawer as false to Notifications by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).prop('displayDrawer')).toBe(false);
  });

  it('passes the correct props to Notifications after state change', () => {
    const wrapper = shallow(<App />);
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find(Notifications).prop('displayDrawer')).toBe(true);
  });

  it('calls displayNotificationDrawer function when displayDrawer is false', () => {
    const displayNotificationDrawerMock = jest.fn();
    const wrapper = shallow(<App displayNotificationDrawer={displayNotificationDrawerMock} />);
    wrapper.setProps({ displayDrawer: false });
    expect(displayNotificationDrawerMock).toHaveBeenCalled();
  });

  it('calls hideNotificationDrawer function when displayDrawer is true', () => {
    const hideNotificationDrawerMock = jest.fn();
    const wrapper = shallow(<App hideNotificationDrawer={hideNotificationDrawerMock} />);
    wrapper.setProps({ displayDrawer: true });
    expect(hideNotificationDrawerMock).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('returns the corret object', () => {
      let state = {
        isUserLoggedIn: true
      };
      let expected = {
        isLoggedIn: true
      }
      const result = mapStateToProps(state);
      expect(result).toEqual(expected)
    })
  });
});
