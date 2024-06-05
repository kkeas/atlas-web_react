import React, { createContext, useState } from 'react';

// Define a default user object
const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false,
};

// Define a default logOut function
const defaultLogOut = () => { };

// Create a React context containing a user object and a logOut function
const AppContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut,
});

// Create the AppContext Provider component
const AppProvider = ({ children }) => {
    // Create the local state for the App
    const [user, setUser] = useState(defaultUser);

    // Create the login function
    const logIn = (email, password) => {
        setUser({
            email,
            password,
            isLoggedIn: true,
        });
    };

    // Create the logOut function
    const logOut = () => {
        setUser(defaultUser);
    };

    // Set the context provider value using the local state
    const contextValue = {
        user,
        logOut,
        logIn,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider, defaultUser, defaultLogOut };
