import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape';



const Notifications = ({displayDrawer, listNotifications})=> {

    return (
        <>
            <div className='menuItem'>Your Notifications</div>
            {displayDrawer ? (
            <div className='Notifications'>
                {listNotifications.length ==! 0 ? <p>Here is the list of notifications</p>
                : <p>No new notification for now</p>}
                <ul>
                    {listNotifications.length === 0 ? 
                <NotificationItem value='No new notification for now' />
                :
                listNotifications.map((notification) => {
                return <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
                    })
                }
                </ul>
                <button
                    style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    }}
                    aria-label="Close"
                    onClick={() => console.log('Close button has been clicked')}
                    >
                </button>
            </div>
            ) : null}
        </>
    );
}
Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)

};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notifications;
