import React from 'react';
import { Link } from 'react-router-dom';



export default class Welcome extends React.Component {

    render () {
        if (this.props.currentUser){
            return(
                <div id='session-buttons'>
                <h2>{`Welcome, ${this.props.currentUser.username}`}</h2>
                <button onClick={this.props.logout}>Logout</button>
                </div>
            )
        } else
        return (
            <div id='session-buttons'>
            <Link to="/login">Login</Link>
            &nbsp;
            
            <Link to="/signup">Sign Up</Link>
            </div>
            )
    }
}