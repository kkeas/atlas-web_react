import React from 'react';
import propTypes from 'prop-types';


CourseListRow.propTypes = {
    isHeader: propTypes.bool,
    textFirstCell: propTypes.string.isRequired,
    textSecondCell: propTypes.string,
};

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    if (isHeader) {
    if (textSecondCell == null) {
      return (
        <tr>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  }
  return (
    <tr>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

export default CourseListRow;
