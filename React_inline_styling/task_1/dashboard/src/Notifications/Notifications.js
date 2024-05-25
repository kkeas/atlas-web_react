import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
    notifications: {
        border: '1px solid #ccc',
        padding: '10px',
    },
    defaultNotification: {
        color: 'blue',
    },
    urgentNotification: {
        color: 'red',
    },
});

class Notifications extends Component {
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { listNotifications } = this.props;
        
        return (
        <div className={css(styles.notifications)}>
            <div className={css(styles.menuItem)}>Your notifications</div>
            {listNotifications.length === 0 ? (
            <NotificationItem type="default" value="No new notification for now" />
            ) : (
                listNotifications.map((notification) => (
                <NotificationItem
                key={notification.id}
                {...notification}
                markAsRead={() => this.markAsRead(notification.id)}
                className={notification.type === 'default' ? styles.defaultNotification : styles.urgentNotification}
              />
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
