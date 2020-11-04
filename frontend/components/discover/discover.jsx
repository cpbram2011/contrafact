import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexContainer from '../song_index/song_index_container'
import SplashIndexContainer from '../song_index/splash_index_container'

export default () => {
 
    
    return (
    
    <div id='discover'>
        <div className="tile-text-1">
        <h2>More of what you like</h2>
        <h3>Suggestions based on what you've liked or played</h3>

        </div>
        <SplashIndexContainer />
        {/* <SongIndexContainer /> */}
        <div className="sidebar"></div>
    </div>


)};

