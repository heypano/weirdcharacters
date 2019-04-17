import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import { BrowserRouter as Router} from 'react-router-dom';
import './scss/index.scss';

ReactDOM.render((
    <Router>
        {Routes}
    </Router>
), document.getElementById('app'));
