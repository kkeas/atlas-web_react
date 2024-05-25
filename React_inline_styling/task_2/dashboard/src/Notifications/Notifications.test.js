import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('displays menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('does not display Notifications div when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('displays menu item and Notifications div when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('calls markAsRead function with the right ID when NotificationItem is clicked', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    const instance = wrapper.instance();

    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    wrapper.find(NotificationItem).at(0).props().markAsRead();

    expect(consoleLogSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    consoleLogSpy.mockRestore();
  });
});
