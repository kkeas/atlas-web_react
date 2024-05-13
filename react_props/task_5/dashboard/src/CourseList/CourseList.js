import React from "react";
import CourseListRow from "../CourseList/CourseListRow";
import "./CourseList.css";
import PropTypes from 'prop-types'
import CourseShape from "./CourseShape";


function CourseList() {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={false} />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
                <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
                <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20" />
                <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40" />
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
