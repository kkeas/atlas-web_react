import 'jsdom-global/register'; //at the top of file, even before importing React
import App from './App';
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('App', () => {
  /* renders App component without crashing */
  it('renders App component without crashing', () => {
    // convert shallow to be 2 layers deep


    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  /* renders Login component */
  it('renders Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  /* renders Header component */
  it('renders Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  /* renders Footer component */
  it('renders Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  /* renders Notifications component */
  it('renders Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

});
