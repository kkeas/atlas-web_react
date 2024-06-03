import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem id={1} type="default" value="Value 1" markAsRead={() => {}} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('calls markAsRead when clicked', () => {
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} type="default" value="Value 1" markAsRead={markAsReadMock} />);

    wrapper.find('li').simulate('click');
    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
});
