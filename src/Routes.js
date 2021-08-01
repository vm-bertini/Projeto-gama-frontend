import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Livros from './pages/Livros';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';

const Routes =  () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/Livros">
                <Livros />
            </Route>
            <Route exact path="/signin">
                <SignIn />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes