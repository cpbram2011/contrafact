import React from 'react';

import {fetchEmail} from '../../util/session_api_util'

export default class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            validEmail: false,
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

        if (!this.state.validEmail) {
            
            fetchEmail(this.state.email).then(result => {
                
                this.setState({validEmail: result})
                
                if (!this.state.validEmail) {
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
            email: 'strange',
            password: 'stranger'
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
                        value={this.state.email}
                        placeholder='Email'
                        onChange={this.update('email')}
                        />
                    
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
                    { (this.state.nameCheck) ? <li>Email not found</li> : null }
                        
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
