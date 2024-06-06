import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

// Action creator for login
export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password },
});

// Action creator for logout
export const logout = () => ({
    type: LOGOUT,
});

// Action creator for displaying notification drawer
export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

// Action creator for hiding notification drawer
export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});

// Bind action creators
export const boundLogin = (email, password) => loginRequest(email, password);
export const boundLogout = () => logoutAction();
export const boundDisplayNotificationDrawer = () => displayNotificationDrawerAction();
export const boundHideNotificationDrawer = () => hideNotificationDrawerAction();

