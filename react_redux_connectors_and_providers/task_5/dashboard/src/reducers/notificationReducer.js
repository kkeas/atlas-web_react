import { FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = fromJS({
    notifications: {
        ids: [],
        entities: {},
        messages: {},
    },
    loading: false,
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data);
            return state.mergeDeep({
                notifications: normalizedData.entities.notifications,
                loading: false,
            });
        case SET_LOADING_STATE:
            return state.set('loading', action.isLoading);
        default:
            return state;
    }
};

export default notificationReducer;
