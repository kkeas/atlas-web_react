import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
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

const Footer = () => {
    const { user } = useContext(AppContext);

    return (
        <div className={css(styles.footer)}>
            {user.isLoggedIn && (
                <p>
                    Contact us at{' '}
                    <span className={css(styles.contactLink)}>support@example.com</span>
                </p>
            )}
            <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
        </div>
    );
};

export default Footer;
