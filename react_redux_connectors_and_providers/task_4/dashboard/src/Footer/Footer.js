import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { getFooterCopy, getFullYear } from '../utils/utils';

const styles = StyleSheet.create({
    footer: {
        textAlign: 'center',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        backgroundColor: '#fff',
        borderTop: '2px solid #ccc',
        padding: '10px 0',
    },
    contactLink: {
        color: '#007BFF',
        textDecoration: 'underline',
        cursor: 'pointer',
    },
});

const mapStateToProps = (state) => ({
    user: state.uiReducer.get('user'),
});

const Footer = ({ user }) => {
    return (
        <div className={css(styles.footer)}>
            {user && user.isLoggedIn && (
                <p>
                    Contact us at{' '}
                    <span className={css(styles.contactLink)}>support@example.com</span>
                </p>
            )}
            <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
        </div>
    );
};

Footer.propTypes = {
    user: PropTypes.shape({
        isLoggedIn: PropTypes.bool,
    }),
};

Footer.defaultProps = {
    user: null,
};

export default connect(mapStateToProps)(Footer);
