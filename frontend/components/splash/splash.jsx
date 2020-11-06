import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeContainer from '../welcome/welcome_container'
import SplashIndexContainer from '../song_index/splash_index_container'


export default (props) => {
    return (

    <div className="splash">
        
    <div className="splash-1">
        <WelcomeContainer />
        <h1 className='splash-text-1a'>Never stop discovering</h1>
        <p className='splash-text-1b'>Save your favorite songs, build and follow playlists. All for free.</p>
    </div>
    
    <div className='splash-search-parent'>
        <div className="splash-search-child">

        <input type="text"
        size='40'
        placeholder='Search for artists, bands, tracks'
        id='splash-search'/>
        
        <img id='splash-search-icon' src="https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg" alt=""/>
    


        </div>
            <p>or</p>
        <div className="splash-search-child-2">
            <button className='upload'>
                Upload your own
            </button>
        </div>
    </div>
    
    <div className="splash-2">
        <img id='splash-image-2' src="https://a-v2.sndcdn.com/assets/images/never_stop_listening@2x-ae7903ca.jpg" alt=""/>
        <div className='splash-2-text-parent'>
        <h1 className='splash-text-2a'>Coming Summer 2021</h1>
        <p className='splash-text-2b'>Visit Contrafact on your favorite mobile device</p>
        </div>
    </div>
    <div className="splash-25">
        <img id='splash-image-25' src="https://a-v2.sndcdn.com/assets/images/hp_creator_image@2x-2200a5f9.jpg" alt=""/>
        <div className='splash-25-text-parent'>
        <h1 className='splash-text-25a'>Conect with fellow music lovers</h1>
        <p className='splash-text-25b'>Contrafact is the best way to find others who share your musical palette. Make friends and find more music you love!</p>
        </div>
    </div>

    <div className="splash-3">


        <h1 className='splash-text-3a'>Thanks for listening. Now join in.</h1>
        <p className='splash-text-3b'>Register now for all the features you love and more.</p>
        <br/>
        <br/>
        <button onClick={() => props.openModal('signup')} id='splash-signup'>Sign Up</button>

        <br/>
        <div class='splash-login-parent'>
        <p>Already have an account?</p>
        <button onClick={() => props.openModal('login')} id='splash-login'>Log In</button>
        </div>
    </div>



    </div>

)   }