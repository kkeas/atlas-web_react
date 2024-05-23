import React from 'react';
import PropTypes from 'prop-types';


CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
    PropTypes.number,
  ]),
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
