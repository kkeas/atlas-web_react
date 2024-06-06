import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Action creator for selecting a course
export const selectCourse = (index) => ({
    type: SELECT_COURSE,
    index,
});

// Action creator for unselecting a course
export const unSelectCourse = (index) => ({
    type: UNSELECT_COURSE,
    index,
});

// Bind action creators
export const boundSelectCourse = (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));
