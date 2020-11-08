import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';

import Modal from './modal/modal';
import SplashContainer from './splash/splash-container'
import DiscoverContainer from './discover/discover'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navbar/navbar_container'
import PlayContainer from './play/play_container';
import SongShow from './songShow/song_show_container.js'
import Footer from './footer/footer';
import Library from './library/library'

export default () => (
    <div>
        <Modal />
        <header className='bar'>
            
            <ProtectedRoute path='/' component={NavBarContainer}/>
            <ProtectedRoute path='/library' component={Library}/>
           

        </header>
        
        <Switch>
            <ProtectedRoute path='/home' component={DiscoverContainer}/>
            <ProtectedRoute path='/song/:id' component={SongShow}/>
            <AuthRoute exact path='/' component={SplashContainer}/>
            
        </Switch>
        <Footer/>
        <PlayContainer />
    </div>
)