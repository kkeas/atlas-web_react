import React, { Component } from 'react';
import { StyleSheet, css, keyframes } from 'aphrodite';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

const fadeIn = keyframes({
    '0%': {
        opacity: 0.5,
    },
    '100%': {
        opacity: 1,
    },
});

const bounce = keyframes({
    '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateY(0)',
    },
    '40%': {
        transform: 'translateY(-5px)',
    },
    '60%': {
        transform: 'translateY(5px)',
    },
});

const styles = StyleSheet.create({
    notifications: {
        border: '1px solid #ccc',
        padding: '10px',
        position: 'relative',
    },
    defaultNotification: {
        color: 'blue',
    },
    urgentNotification: {
        color: 'red',
    },

    menuItem: {
        position: 'fixed',
        top: '10px',
        right: '10px',
        backgroundColor: '#fff8f8',
        cursor: 'pointer',
        zIndex: 1,
        '@media (max-width: 900px)': {
            fontSize: '20px',
            ':hover': {
                animationName: [fadeIn, bounce],
                animationDuration: '1s, 0.5s',
                animationIterationCount: '3, 3',
                animationDelay: '0s, 0s',
            },
        },
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
