import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';

import Modal from './modal/modal';
import SplashContainer from './splash/splash-container'
import DiscoverContainer from './discover/discover'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navbar/navbar_container'
import PlayContainer from './play/play_container';

export default () => (
    <div>
        <Modal />
        <header className='bar'>
            
            <ProtectedRoute path='/home' component={NavBarContainer}/>
           

        </header>
        
        <Switch>
            <ProtectedRoute path='/home' component={DiscoverContainer}/>
            <AuthRoute exact path='/' component={SplashContainer}/>
            
        </Switch>
        <PlayContainer />
        
    </div>
)