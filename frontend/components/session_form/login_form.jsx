import React from 'react';

import {fetchUsername} from '../../util/session_api_util'

export default class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            validUser: false,
            nameCheck: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.continueAsGuest = this.continueAsGuest.bind(this);
    }

    componentWillUnmount () {
        this.props.clearErrors();
    }


    update (field) {
        return e => (
            this.setState({[field]: e.target.value})
        )
    }

    handleSubmit (e) {
        
        e.preventDefault();

        if (!this.state.validUser) {
            
            fetchUsername(this.state.username).then(result => {
                
                this.setState({validUser: result})
                
                if (!this.state.validUser) {
                    this.setState({nameCheck: true});
                } else {
                    this.setState({nameCheck: false});
                }
            });
            
        } else {
            
            this.props.action(this.state).then(this.props.closeModal);
        }

    }

    continueAsGuest (e) {
        e.preventDefault();
        
        this.props.guest ({
            username: 'Stranger',
            password: 'stranger',
        }).then(this.props.closeModal);
    }


    render() {
        return (
            <div  className='session-form'>
                <h3></h3>
                <br/>
                
                

                <form className='input-form' onSubmit={this.handleSubmit}>
                    
                        <input type="text"
                        size='38'
                        value={this.state.username}
                        placeholder='Username'
                        onChange={this.update('username')}
                        />
                    
                    
                    { this.props.needEmail ?
                       (    
                           <>
                            <br/>
                            <input type="text"
                            size='38'
                            value={this.state.email}
                            placeholder='Email'
                            onChange={this.update('email')}
                            />
                            <br/>
                            </>
                            ) : <><br/></>
                        }
                        { this.state.validUser ? (

                            <input type="password"
                            size='38'
                            value={this.state.password}
                            placeholder='Password'
                            
                            onChange={this.update('password')}
                            />
                            ) : (
                                <></>
                            )
                        }
                        <br/>
                </form>
                    
                <ul className='errors'>
                    { this.state.nameCheck ? (
                        (this.props.formType === "Log In") ? (
                            <li>Username not found</li>
                            ) : (
                            <li>Username already exists</li>
                        )) : (<></>
                    )}
                    {this.props.errors.map((error) => (
                        <li>{error}</li>
                        ))} 
                    
                </ul>
                    
                    

                    <button onClick={this.handleSubmit} id='continue'>Continue</button>
                    
                    <br/>
                        <p id='or'><span>or</span></p>
                    <br/>
                    <button id='guest-btn' onClick={this.continueAsGuest}>Continue as Guest</button>
                    
                
            </div>
        )
    }
    
}
