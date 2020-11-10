import React from 'react';
import {Link} from 'react-router-dom'


export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dropdown: false
        }
        this.handleDropdown = this.handleDropdown.bind(this)
    }

    handleDropdown (e) {
        e.preventDefault()
        this.setState({ dropdown: !this.state.dropdown })
    }
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
                <div className="upload-container">
                <button onClick={() =>this.props.openModal('form')} id='form'>upload
                </button>

                </div>
                    <div id='username-dropdown'>
                    <h2 id='username'
                    onMouseOver={this.handleDropdown}
                    >{`Welcome, ${this.props.currentUser.username}`}</h2>
                    {this.state.dropdown ? (
                        <button id='logout' onClick={this.props.logout}>Logout</button>
                    ) : null}
                    </div>

                    
            </div>
        )
    

    
    }


}