import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom Component', () => {
  it('renders correctly with BodySection component and props passed correctly', () => {
    const props = {
      title: 'test title',
      children: <p>test children node</p>,
    };

    const wrapper = shallow(<BodySectionWithMarginBottom {...props} />);

    // Check that BodySectionWithMarginBottom has the correct class
    expect(wrapper.hasClass('bodySectionWithMargin')).toBeTruthy();

    // Check that there is one BodySection component
    expect(wrapper.find('BodySection')).toHaveLength(1);

    // Check that BodySection component receives props correctly
    const bodySectionProps = wrapper.find('BodySection').props();
    expect(bodySectionProps.title).toEqual(props.title);
    expect(bodySectionProps.children).toEqual(props.children);
  });
});
