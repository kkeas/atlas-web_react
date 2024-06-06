import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.png';
import { logout } from '../actions/uiActionCreators';

const styles = StyleSheet.create({
    appHeader: {
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        maxWidth: '800px',
    },
    
    appLogo: {
        height: '20vmin',
        pointerEvents: 'none',
        marginRight: '5%', 
    },
    
    appTitle: {
        fontSize: 'calc(10px + 2vmin)',
        color: '#E0354B',
        fontWeight: 'bold',
        marginRight: '10%', 
        marginTop: '-80px',
    },
});

const mapStateToProps = (state) => ({
    user: state.uiReducer.get('user'),
});

const mapDispatchToProps = {
    logout,
};

const Header = ({ user, logout }) => {
    const handleLogout = () => {
        logout();
    };

    return (
        <header className={css(styles.appHeader, styles.appLogo, styles.appTitle)}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
            {user && user.isLoggedIn && (
                <p className={css(styles.logoutLink)} onClick={handleLogout}>
                    Logout
                </p>
            )}
        </header>
    );
};

Header.propTypes = {
    user: PropTypes.shape({
        isLoggedIn: PropTypes.bool,
    }),
    logout: PropTypes.func.isRequired,
};

Header.defaultProps = {
    user: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
