import React, { createContext, useState } from 'react';

const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false,
};

const defaultLogOut = () => { };

const AppContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut,
});

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser);

    const logIn = (email, password) => {
        setUser({
            email,
            password,
            isLoggedIn: true,
        });
    };

    const logOut = () => {
        setUser(defaultUser);
    };

    const contextValue = {
        user,
        logOut,
        logIn,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider, defaultUser, defaultLogOut };
