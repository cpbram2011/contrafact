import React from 'react';

import {fetchEmail} from '../../util/session_api_util'

export default class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'User ' + (Math.floor(Math.random() * 100000) + 1),
            password: '',
            email: '',
            validEmail: false,
            emailCheck: true,
            blankEmail: null
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

        if (!this.state.validEmail) {
            if (this.state.email === ''){
                this.setState({validEmail: false, blankEmail: true})
            } else {
            fetchEmail(this.state.email).then(result => {
            
                this.setState({validEmail: !result })

                if (!this.state.validEmail) {
                    this.setState({emailCheck: false})
                } else {
                    this.setState({emailCheck: true})
                }
                this.setState({blankEmail: false})
                
            });
        }
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
                <h3>Create your Contrafact account</h3>
                <br/>
                
                
                <form className='input-form' onSubmit={this.handleSubmit}>
                                    
                    
                    <br/>
                    <input type="text"
                    size='38'
                    value={this.state.email}
                    placeholder='Email'
                    onChange={this.update('email')}
                    />
                    <br/>
                    
                            
                        { this.state.validEmail ? (
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
                    { !this.state.emailCheck ? (

                         <li>
                            Email already taken
                        </li>
                        ) : (<></>
                    )
                }
                    { this.state.blankEmail ? (

                         <li>
                            Email can't be blank
                        </li>
                        ) : (<></>
                    )
                }
                    {this.props.errors.map((error) => (
                        <li>{error}</li>
                        ))} 
                    
                </ul>
                    

                    <button onClick={this.handleSubmit}>Continue</button>
                    
                    <br/>
                        <p id='or'><span>or</span></p>
                    <br/>
                    <button id='guest-btn' onClick={this.continueAsGuest}>Continue as Guest</button>
                    
                
            </div>
        )
    }
    
}
