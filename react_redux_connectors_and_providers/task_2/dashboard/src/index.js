import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uiReducer from './reducers/uiReducer';
import thunk from 'redux-thunk';

import App from './App/App';

const store = createStore(uiReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

