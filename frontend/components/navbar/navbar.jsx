import React from 'react';
import {Link} from 'react-router-dom'


export default class NavBar extends React.Component {
    render () {
        
        
        return(
            <div className='nav-bar'>

                    <Link to='/' id='contrafact'>
                        <img  src='https://www.iconfinder.com/data/icons/electronic-device-glyph-1/64/electronic_devices_7-512.png' />
                    </Link>
                
                <div className='nav-links'>
                    <Link to="/home" >Home</Link>
                    <Link>Stream</Link>
                    <Link to="/library">Library</Link>
                
                </div>
                <div className='search-bar'>
                    <input type="text"
                    className='search-text'
                    size='40'
                    placeholder='Search'
                    />
                    <img src="https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg" alt=""/>
                </div>
                    <div id='session-buttons'>
                    <h2 id='username'>{`Welcome, ${this.props.currentUser.username}`}</h2>
                    <button id='logout' onClick={this.props.logout}>Logout</button>
                    </div>
                    
            </div>
        )
    

    
    }


}