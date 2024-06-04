import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('displays the link when the user is logged in within the context', () => {
    const user = { isLoggedIn: true };
    const wrapper = shallow(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('.contactLink')).toHaveLength(1);
  });

  it('does not display the link when the user is logged out within the context', () => {
    const user = { isLoggedIn: false };
    const wrapper = shallow(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('.contactLink')).toHaveLength(0);
  });
});
