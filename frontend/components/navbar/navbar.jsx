import React from 'react';
import {Link} from 'react-router-dom'
import { FaChevronDown} from 'react-icons/fa';

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
                    <a href="https://www.linkedin.com/in/chris-bram-522a661b9/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/cpbram2011/contrafact" target="_blank">Github</a>
                    
                
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
                <button onClick={() =>this.props.openModal('form')} id='form'>Upload
                </button>

                </div>
                <div className='username-dropdown'>
                    <div>
                        <p className="user-pic"></p>
                        <h3 className='username'
                        onMouseOver={this.handleDropdown}
                        onClick={this.handleDropdown}
                        >{this.props.currentUser.username}</h3>
                        <FaChevronDown className='chevron'
                        onClick={this.handleDropdown}
                        />
                    </div>


                    {this.state.dropdown ? (
                        <ul>
                            <Link to={`/user/${this.props.currentUser.id}`}>
                            <button id='logout'>Profile</button>
                            </Link>
                            <button id='logout' onClick={this.props.logout}>Logout</button>
                        </ul>
                    ) : null}
                </div>

                    
            </div>
        )
    

    
    }


}