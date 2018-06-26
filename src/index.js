import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import { HashRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/index.scss';

ReactDOM.render((
    <Router>
        {Routes}
    </Router>
), document.getElementById('app'));
