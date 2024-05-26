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

  it('calls logOut function on ctrl+h key press', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<App logOut={logOutMock} />);

    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
  });

  it('removes event listener on unmount', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<App logOut={logOutMock} />);

    wrapper.unmount();

    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(logOutMock).not.toHaveBeenCalled();
  });

  it('passes displayDrawer as false to Notifications by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).prop('displayDrawer')).toBe(false);
  });

  it('changes displayDrawer state to true on handleDisplayDrawer call', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('changes displayDrawer state to false on handleHideDrawer call', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('passes correct props to Notifications after state change', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.find(Notifications).prop('displayDrawer')).toBe(true);
    expect(wrapper.find(Notifications).prop('handleDisplayDrawer')).toEqual(
      wrapper.instance().handleDisplayDrawer
    );
    expect(wrapper.find(Notifications).prop('handleHideDrawer')).toEqual(
      wrapper.instance().handleHideDrawer
    );
  });
});
