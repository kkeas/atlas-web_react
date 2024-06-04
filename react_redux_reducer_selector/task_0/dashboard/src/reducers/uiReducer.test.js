import uiReducer from './uiReducer';
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
    it('should return initial state when no action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        const newState = uiReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('should return initial state when SELECT_COURSE action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        const newState = uiReducer(initialState, { type: 'SELECT_COURSE' });
        expect(newState).toEqual(initialState);
    });

    it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        const newState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(newState.isNotificationDrawerVisible).toEqual(true);
    });

});
