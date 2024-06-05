import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('renders correctly with children and title', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check that there is one h2 element with the correct title
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('test title');

    // Check that there is one p element with the correct text
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});
