import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notificationItem: {
    cursor: 'pointer',
    fontWeight: 'bold',
  },

  // Media query for screens with a width under 900px
  '@media (max-width: 900px)': {
    notificationItem: {
      width: '100%',        // Item takes full width for small screens
      borderBottom: '1px solid black',  // Black border at the bottom
      fontSize: '20px',     // Font size increased for small screens
      padding: '10px 8px',  // Padding adjusted for small screens
    },
  },
});

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  }

  render() {
    const { type, value } = this.props;
    return (
      <li onClick={this.handleClick} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;
