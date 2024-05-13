import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem.js';



const Notifications = ({displayDrawer})=> {

    return (
        <>
            <div className='menuItem'>Your Notifications</div>
            {displayDrawer ? (
            <div className='Notifications'>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type='default' value='New course available' />
                    <NotificationItem type='urgent' value='New resume available' />
                    <NotificationItem type='urgent' html={{__html: getLatestNotification()}} />
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
};

Notifications.defaultProps = {
    displayDrawer: false,
}

export default Notifications;
