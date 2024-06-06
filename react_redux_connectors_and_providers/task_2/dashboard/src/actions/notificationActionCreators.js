import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// Action creator for marking notification as read
export const markAsRead = (index) => ({
    type: MARK_AS_READ,
    index,
});

// Action creator for setting notification filter
export const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter,
});

// Bind action creators
export const boundMarkAsRead = (index) => markAsReadAction(index);
export const boundSetNotificationFilter = (filter) => setNotificationFilterAction(filter);
