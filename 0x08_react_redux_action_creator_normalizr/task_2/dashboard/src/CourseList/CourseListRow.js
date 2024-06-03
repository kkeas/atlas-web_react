import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const rowStyle = isHeader ? styles.headerRow : isChecked ? styles.rowChecked : styles.row;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const cellContent = isHeader ? (
    textSecondCell === null ? (
      <th colSpan="2" className={css(rowStyle)}>
        {textFirstCell}
      </th>
    ) : (
      <>
        <th className={css(rowStyle)}>{textFirstCell}</th>
        <th className={css(rowStyle)}>{textSecondCell}</th>
      </>
    )
  ) : (
    <>
      <td className={css(rowStyle)}>
        <input type="checkbox" onChange={handleCheckboxChange} /> {textFirstCell}
      </td>
      <td className={css(rowStyle)}>{textSecondCell}</td>
    </>
  );

  return <tr className={css(rowStyle)}>{cellContent}</tr>;
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
