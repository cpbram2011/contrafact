import React from 'react';

export default class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update (field) {
        return e => (
            this.setState({[field]: e.target.value})
        )
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.action(this.state)
    }


    render() {
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <br/>
                <ul>
                    {this.props.errors.map((error) => (
                    <li>{error}</li>
                    ))} 
                    {/* doesnt work ^^^ */}
                </ul>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        />
                    </label>
                    
                    { this.props.needEmail ?
                       (    <> 
                            <br/>
                            <label>Email:
                            <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            />
                            </label>
                            <br/> 
                            </>) : <br/>
                    }
                    <label>Password:
                        <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                    </label>
                    <br/>
                    <button onClick={this.handleSubmit}>Submit</button>

                </form>
            </div>
        )
    }

}