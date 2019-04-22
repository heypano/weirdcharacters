import React from 'react';
import {render} from 'react-dom';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { BrowserRouter as Router} from 'react-router-dom';
import './scss/index.scss';

const store = createStore(rootReducer)

console.log(store.getState());

render((
    <Provider store={store}>
        <Router>
        {Routes}
        </Router>
    </Provider>
), document.getElementById('app'));
