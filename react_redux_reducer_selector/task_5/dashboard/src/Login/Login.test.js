import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('should have submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('button[type="submit"]');
    expect(submitButton.prop('disabled')).toEqual(true);
  });

  it('should enable submit button after changing email and password inputs', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const submitButton = wrapper.find('button[type="submit"]');

    // Simulate user input for email and password
    emailInput.simulate('change', { target: { value: 'test@email.com' } });
    passwordInput.simulate('change', { target: { value: 'password123' } });

    // Check if the submit button is enabled
    expect(submitButton.prop('disabled')).toEqual(false);
  });
});
