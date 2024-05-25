import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
