import React from 'react';
import ComponentTwo from "../components/ComponentTwo";
import ComponentOne from "../components/ComponentOne";
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route exact path="/" component={ComponentOne} />
        <Route path="/c1" component={ComponentOne}/>
        <Route path="/c2" component={ComponentTwo}/>
    </Switch>
);
