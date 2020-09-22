import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';

import SignUpFormContainter from './session_form/signup_form_container';
import LogInFormContainter from './session_form/login_form_container';
import WelcomeContainer from './welcome/welcome_container';


export default () => (
    <div>
        <header id='welcome-bar'>
            <Link to='/'><h1>Contrafact</h1></Link>
            <WelcomeContainer />
        </header>
        <Switch>
            <Route exact path="/login" component={LogInFormContainter} />
            <Route exact path="/signup" component={SignUpFormContainter} />
        </Switch>
    </div>
)