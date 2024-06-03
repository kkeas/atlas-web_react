import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

const styles = StyleSheet.create({
  CourseList: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
});

const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.CourseList)} id="CourseList">
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
