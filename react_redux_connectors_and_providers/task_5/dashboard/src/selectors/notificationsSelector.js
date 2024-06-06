export const filterTypeSelected = state => state.filter;

export const getNotifications = state => state.notifications;

export const getUnreadNotifications = state => {
    return state.notifications.filter(notification => !notification.isRead);
};
