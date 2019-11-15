import React from "react";
import ComponentTwo from "../components/ComponentTwo";
import ComponentOne from "../components/ComponentOne";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home";

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/c1" component={ComponentOne} />
        <Route path="/c2" component={ComponentTwo} />
    </Switch>
);
