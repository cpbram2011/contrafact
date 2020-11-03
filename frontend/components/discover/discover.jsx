import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexContainer from '../song_index/song_index_container'
import SplashIndexContainer from '../song_index/splash_index_container'

export default () => {
 
    
    return (
    <div id='discover'>
        <SplashIndexContainer />
        {/* <SongIndexContainer /> */}
        <div className="sidebar"></div>
    </div>


)};

