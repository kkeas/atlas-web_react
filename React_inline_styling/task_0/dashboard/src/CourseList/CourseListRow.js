import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
  };

  const cellContent = isHeader ? (
    textSecondCell === null ? (
      <th colSpan="2" style={rowStyle}>
        {textFirstCell}
        </th>
    ) : (
      <>
        <th style={rowStyle}>{textFirstCell}</th>
        <th style={rowStyle}>{textSecondCell}</th>
      </>
    )
  ) : (
    <>
      <td style={rowStyle}>{textFirstCell}</td>
      <td style={rowStyle}>{textSecondCell}</td>
    </>
  );

  return <tr style={rowStyle}>{cellContent}</tr>;
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
