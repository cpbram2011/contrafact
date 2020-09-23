import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import WelcomeContainer from './welcome/welcome_container';
import SplashContainer from './splash/splash'
import DiscoverContainer from './discover/discover'
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
            <ProtectedRoute path='/home' component={DiscoverContainer}/>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            
        </Switch>
            <AuthRoute exact path='/' component={SplashContainer}/>
            
    </div>
)