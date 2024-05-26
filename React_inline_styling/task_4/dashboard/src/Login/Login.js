import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
appBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    borderTop: '5px solid #00003C',
    borderBottom: '5px solid #00003C',
},

paragraph: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    fontWeight: 400,
    fontSize: '1.3rem',
    margin: '1rem 2rem 1rem 4rem',
},

form: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight: 400,
    fontSize: '1.2rem',
    margin: '0.5rem 2rem 1rem 4rem',
},

label: {
    paddingRight: '0.5rem',
},

input: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    fontWeight: 400,
    fontSize: '1.3rem',
    margin: '0.5rem',
    padding: '0.2rem',
    border: '1px solid #00003C',
    borderRadius: '2px',
    maxWidth: 'calc(50% - 2rem)',
},

button: {
    backgroundColor: '#00003C',
    color: 'white',
    marginTop: '0.5rem',
},

'@media (max-width: 900px)': {
    form: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    button: {
        maxWidth: '100%',
    },
},
});

function Login() {
return (
    <>
    <div className={css(styles.appBody)}>
        <p className={css(styles.paragraph)}>Login to access the full dashboard</p>
        <form className={css(styles.form)}>
        <label htmlFor="email" className={css(styles.label)}>Email: </label>
        <input type="email" id="email" name="email" className={css(styles.input)} />
        <label htmlFor="password" className={css(styles.label)}>Password: </label>
        <input type="password" id="password" name="password" className={css(styles.input)} />
        <button className={css(styles.button)}>OK</button>
        </form>
    </div>
    </>
    );
}

export default Login;

