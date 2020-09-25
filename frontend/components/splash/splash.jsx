import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (

    <div className="splash">

    <div className="splash-1">
        <img id='splash-image' src="https://streamko.com/wp-content/uploads/2016/08/Club-Music-Party-People-HD-Wallpaper.jpg" alt=""/>
        <h1 className='splash-text-1a'>Never stop discovering</h1>
        <p className='splash-text-1b'>Save your favorite songs, build and follow playlists. All for free.</p>
    </div>
    
    <div className="splash-2">
        <img id='splash-image-2' src="https://a-v2.sndcdn.com/assets/images/never_stop_listening@2x-ae7903ca.jpg" alt=""/>
        <div className='splash-2-text-parent'>
        <h1 className='splash-text-2a'>Coming May 2021</h1>
        <p className='splash-text-2b'>Visit Contrafact on your favorite mobile device</p>
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

)   