import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';

import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import WelcomeContainer from './welcome/welcome_container';
import SplashContainer from './splash/splash'
import DiscoverContainer from './discover/discover'
import { AuthRoute, ProtectedRoute } from '../util/route_util';



export default () => (
    <div>
        <Modal />
        <header id='welcome-bar'>
            <Link to='/' id='contrafact'>

            <img  src='https://www.iconfinder.com/data/icons/electronic-device-glyph-1/64/electronic_devices_7-512.png' />
                
            </Link>
            <div >
                
                <WelcomeContainer />
            </div>

        </header>

        <Switch>
            <ProtectedRoute path='/home' component={DiscoverContainer}/>
            {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
            
        </Switch>
            <AuthRoute exact path='/' component={SplashContainer}/>
            
    </div>
)