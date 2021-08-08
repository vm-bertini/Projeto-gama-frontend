import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Livros from './pages/Livros';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navigation from './pages/Navigation'
import Detalhes from './pages/Detalhes'

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
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path='/navigation'>
                <Navigation />
            </Route>
            <Route exact path='/Detalhes/:livro'>
                <Detalhes/>
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes