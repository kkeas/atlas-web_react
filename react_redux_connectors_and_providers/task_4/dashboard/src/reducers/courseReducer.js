import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = fromJS({
    courses: {}
});

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedData = coursesNormalizer(action.data);
            return state.mergeIn(['courses'], normalizedData.entities.courses);
        default:
            return state;
    }
};

export default courseReducer;
