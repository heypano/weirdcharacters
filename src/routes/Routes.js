import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import WeirdCharacters from "../components/pages/WeirdCharacters";

export default (
    <Switch>
        <Route
            exact
            path="/weird/:urlSearchValue?"
            component={WeirdCharacters}
        />
        <Route exact path="/:urlSearchValue?" component={WeirdCharacters} />
    </Switch>
);
