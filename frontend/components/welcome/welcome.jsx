import React from 'react';
import { Link } from 'react-router-dom';


export default class Welcome extends React.Component {
    render () {
        
        return (

            <div className='session-bar'>
                
                <Link to='/' id='contrafact'>
                <img  src='https://www.iconfinder.com/data/icons/electronic-device-glyph-1/64/electronic_devices_7-512.png' />
                </Link>
                                

                <div className='session-buttons'>
                    <button onClick={() =>this.props.openModal('login')} id='login'>Sign In</button>
                    <button onClick={() =>this.props.openModal('signup')} id='signup'>Create account</button>
                    <p id='for-creators'>For Creators</p>
                </div>

            </div>
            )
    }
}