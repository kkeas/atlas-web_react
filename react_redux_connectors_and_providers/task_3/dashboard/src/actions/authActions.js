export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// Async action creator for login
export const loginRequest = (username, password) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        try {
            // Make API call to login
            const response = await fetch('your_login_api_url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                const data = await response.json();
                dispatch({ type: LOGIN_SUCCESS, payload: data });
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
        }
    };
};

// Action creator for logout
export const logout = () => {
    return { type: LOGOUT };
};
