import React from 'react';
import {render} from 'react-dom';
import Routes from './routes/Routes';
import { BrowserRouter as Router} from 'react-router-dom';
import './scss/index.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

console.log(store.getState());

render((
    <Provider store={store}>
        <Router>
        {Routes}
        </Router>
    </Provider>
), document.getElementById('app'));
