import React from 'react';
import ReactDOM from 'react-dom';
import ComponentOne from './components/ComponentOne';
import {getCats} from "./api/cats";
import './scss/index.scss';

let buttonText = "AWESOME";

ReactDOM.render(
    (<ComponentOne valuePassedAsAProp={buttonText}/>),
    document.getElementById("app")
);

getCats().then(result => console.log(result));
