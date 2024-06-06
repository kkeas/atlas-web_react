import { Map } from 'immutable';
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
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({}),
        });
        const newState = uiReducer(undefined, {});
        expect(newState.equals(initialState)).toEqual(true);
    });

    it('should return initial state when SELECT_COURSE action is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({}),
        });
        const newState = uiReducer(initialState, { type: 'SELECT_COURSE' });
        expect(newState.equals(initialState)).toEqual(true);
    });

    it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({}),
        });
        const newState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(newState.get('isNotificationDrawerVisible')).toEqual(true); // Use get for access
    });

    // Add more test cases for other actions as needed
});
