import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

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

// Action creator for setting loading state
export const setLoadingState = (isLoading) => ({
    type: SET_LOADING_STATE,
    isLoading,
});

// Action creator for setting notifications data
export const setNotifications = (data) => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
});

// Action creator for fetching notifications
export const fetchNotifications = () => {
    return (dispatch) => {
        dispatch(setLoadingState(true));

        fetch('/notifications.json')
            .then((response) => response.json())
            .then((data) => {
                dispatch(setNotifications(data));
                dispatch(setLoadingState(false));
            })
            .catch((error) => {
                console.error('Error fetching notifications:', error);
                dispatch(setLoadingState(false));
            });
    };
};

// Bind action creators
export const boundMarkAsRead = (index) => markAsReadAction(index);
export const boundSetNotificationFilter = (filter) => setNotificationFilterAction(filter);
