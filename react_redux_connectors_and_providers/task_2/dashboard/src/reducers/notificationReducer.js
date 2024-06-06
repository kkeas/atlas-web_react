import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = fromJS({
    notifications: {}
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data);
            return state.mergeIn(['notifications'], normalizedData.entities.notifications);
        default:
            return state;
    }
};

export default notificationReducer;
