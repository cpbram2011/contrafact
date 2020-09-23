import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';

import SignUpFormContainter from './session_form/signup_form_container';
import LogInFormContainter from './session_form/login_form_container';
import WelcomeContainer from './welcome/welcome_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



export default () => (
    <div>
        <header id='welcome-bar'>
            <Link to='/' id='contrafact'><h1>Contrafact</h1></Link>

            <div >
                <WelcomeContainer />
            </div>

        </header>

        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainter} />
            <AuthRoute exact path="/signup" component={SignUpFormContainter} />
            
        </Switch>
    </div>
)