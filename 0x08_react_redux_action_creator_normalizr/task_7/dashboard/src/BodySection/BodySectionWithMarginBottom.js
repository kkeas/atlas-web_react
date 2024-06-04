import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import BodySection from './BodySection';

const styles = StyleSheet.create({
  bodySectionWithMarginBottom: {
    marginBottom: '2rem',
  },
});

const BodySectionWithMarginBottom = ({ title, children }) => (
  <div className={css(styles.BodySectionWithMarginBottom)}>
    <BodySection title={title}>{children}</BodySection>
  </div>
);

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  children: null,
};

export default BodySectionWithMarginBottom;
