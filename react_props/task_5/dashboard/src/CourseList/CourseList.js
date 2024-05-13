import React from "react";
import CourseListRow from "../CourseList/CourseListRow";
import "./CourseList.css";
import PropTypes from 'prop-types'
import CourseShape from "./CourseShape";


const CourseList = ({listCourses}) => {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={false} />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
            {listCourses.length === 0 ?
        <CourseListRow isHeader={false} textFirstCell="No course available yet" />
        : listCourses.map((course) => {
          return <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} />
        })}
            </tbody>
        </table>
    )
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
  };
  
  CourseList.defaultProps = {
    listCourses: []
  };
  

export default CourseList;
