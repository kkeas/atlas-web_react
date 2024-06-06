import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    loginRequest,
    logoutAction,
    displayNotificationDrawerAction,
    hideNotificationDrawerAction,
} from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
    it('should create an action to login', () => {
        const email = 'user@example.com';
        const password = 'password123';
        const expectedAction = {
            type: LOGIN,
            user: { email, password },
        };
        expect(login(email, password)).toEqual(expectedAction);
    });

    it('should create an action to logout', () => {
        const expectedAction = {
            type: LOGOUT,
        };
        expect(logout()).toEqual(expectedAction);
    });

    it('should create an action to display notification drawer', () => {
        const expectedAction = {
            type: DISPLAY_NOTIFICATION_DRAWER,
        };
        expect(displayNotificationDrawer()).toEqual(expectedAction);
    });

    it('should create an action to hide notification drawer', () => {
        const expectedAction = {
            type: HIDE_NOTIFICATION_DRAWER,
        };
        expect(hideNotificationDrawer()).toEqual(expectedAction);
    });

    // Add any additional tests for async action creators if needed
});
