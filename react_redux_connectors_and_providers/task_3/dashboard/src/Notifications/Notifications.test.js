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
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('does not display Notifications div when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('displays menu item and Notifications div when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('calls handleDisplayDrawer function when menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />);
    
    wrapper.find('.menuItem').simulate('click');
    
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer function when close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer handleHideDrawer={handleHideDrawer} />);
    
    wrapper.find('button').simulate('click');
    
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it('calls markAsRead function with the right ID when NotificationItem is clicked', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const wrapper = shallow(<Notifications listNotifications={notifications} displayDrawer />);
    const instance = wrapper.instance();

    // Mock the console.log function
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Trigger click on the first NotificationItem
    wrapper.find(NotificationItem).at(0).props().markAsRead();

    // Assert that markAsRead function is called with the right ID
    expect(consoleLogSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    // Restore the console.log function
    consoleLogSpy.mockRestore();
  });
});

