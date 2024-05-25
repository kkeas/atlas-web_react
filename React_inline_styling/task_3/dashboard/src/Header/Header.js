import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.png';

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
        marginRight: '5%', // adjust this later if need be
    },
    
    appTitle: {
        fontSize: 'calc(10px + 2vmin)',
        color: '#E0354B',
        fontWeight: 'bold',
        marginRight: '10%',
        marginTop: '-80px',
    },
});

function Header() {
    return (
            <header className={css(styles.appHeader, styles.appLogo, styles.appTitle)}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>School dashboard</h1>
            </header>
    );
}

export default Header;
