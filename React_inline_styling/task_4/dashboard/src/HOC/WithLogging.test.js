import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

// Mock console.log to check if it's called
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('WithLogging HOC', () => {
  afterEach(() => {
    // Restore the original console.log after each test
    mockConsoleLog.mockRestore();
  });

  it('logs on mount and unmount with Component for pure HTML', () => {
    const WrappedComponent = () => <div>Hello, World!</div>;
    const WithLoggingComponent = WithLogging(WrappedComponent);
    const wrapper = shallow(<WithLoggingComponent />);

    expect(mockConsoleLog).toHaveBeenCalledWith('Component WithLoggingComponent is mounted on componentDidMount()');

    wrapper.unmount();

    expect(mockConsoleLog).toHaveBeenCalledWith('Component WithLoggingComponent is going to unmount on componentWillUnmount()');
  });

  it('logs on mount and unmount with the name of the component for Login component', () => {
    const Login = () => <div>Login component</div>;
    const WithLoggingLogin = WithLogging(Login);
    const wrapper = shallow(<WithLoggingLogin />);

    expect(mockConsoleLog).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');

    wrapper.unmount();

    expect(mockConsoleLog).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});
