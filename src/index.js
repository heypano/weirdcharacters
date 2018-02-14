import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/index.scss';
//TODO use ExtractTextPlugin to make sure css loads first

ReactDOM.render((
    <Router>
        {Routes}
    </Router>
), document.getElementById('app'));
