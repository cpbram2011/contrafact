import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';

import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import WelcomeContainer from './welcome/welcome_container';
import SplashContainer from './splash/splash-container'
import DiscoverContainer from './discover/discover'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navbar/navbar_container'


export default () => (
    <div>
        <Modal />
        <header className='bar'>
            
           

            
            <AuthRoute path='/' component={WelcomeContainer} />
            <ProtectedRoute path='/home' component={NavBarContainer}/>
           

        </header>

        <Switch>
            <ProtectedRoute path='/home' component={DiscoverContainer}/>
            <AuthRoute exact path='/' component={SplashContainer}/>
            
        </Switch>
            
    </div>
)