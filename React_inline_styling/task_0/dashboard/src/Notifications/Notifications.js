import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div className="Notifications">
        <div className="menuItem">Your notifications</div>
        {listNotifications.length === 0 ? (
          <NotificationItem type="default" value="No new notification for now" />
        ) : (
          listNotifications.map((notification) => (
            <NotificationItem key={notification.id} {...notification} markAsRead={() => this.markAsRead(notification.id)} />
          ))
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
