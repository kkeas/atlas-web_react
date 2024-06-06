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
    const wrapper = shallow(<App logOut={logOutMock} />); // Pass logOut as prop

    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
  });

  it('removes event listener on unmount', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<App logOut={logOutMock} />); // Pass logOut as prop

    wrapper.unmount();

    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(logOutMock).not.toHaveBeenCalled();
  });
});
