import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppContainer from "../app-container";

function MainRouter() {
    return(
    <Router>
        <Switch>
            <Route exact={true} path={'/home'} component={AppContainer}/>
            <Route exact path="/" render={() => (
                <Redirect to="/home"/>
            )}/>
        </Switch>
    </Router>);
}

export default MainRouter;

