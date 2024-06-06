import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';

// Animation
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

// Styles
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

const Notifications = ({
    listNotifications,
    displayDrawer,
    handleDisplayDrawer,
    handleHideDrawer,
    markNotificationAsRead,
    fetchNotifications,
}) => {
    useEffect(() => {
        fetchNotifications();
    }, [fetchNotifications]);

    return (
        <div className={css(styles.notifications)}>
            <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
                Your notifications
            </div>
            {listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
            ) : (
                listNotifications.map((notification) => (
                    <NotificationItem
                        key={notification.id}
                        {...notification}
                        markAsRead={() => markNotificationAsRead(notification.id)}
                        className={
                            notification.type === 'default'
                                ? styles.defaultNotification
                                : styles.urgentNotification
                        }
                    />
                ))
            )}
            {displayDrawer && <button onClick={handleHideDrawer}>Close</button>}
        </div>
    );
};

Notifications.propTypes = {
    listNotifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ),
    displayDrawer: PropTypes.bool.isRequired,
    handleDisplayDrawer: PropTypes.func.isRequired,
    handleHideDrawer: PropTypes.func.isRequired,
    markNotificationAsRead: PropTypes.func.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
    listNotifications: [],
};

const mapStateToProps = (state) => ({
    listNotifications: Object.values(state.notifications.messages),
});

const mapDispatchToProps = {
    fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
