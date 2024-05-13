import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("table#CourseList").exists()).toEqual(true);
  });

  it("renders 5 diffrent rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("thead").children().length).toEqual(2);
    expect(wrapper.find("tbody").children().length).toEqual(3);
  });
});

/* task 5 */
it('renders correctly without passing listCourses property', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.find('CourseListRow')).toHaveLength(3);
});

it('renders correctly when passing an array of courses', () => {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40},
  ];
  const wrapper = shallow(<CourseList listCourses={listCourses} />);
  expect(wrapper.find('CourseListRow')).toHaveLength(5);
});

