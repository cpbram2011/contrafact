import React from 'react';

export default class Sidebar extends React.Component {
    
    componentDidMount () {
        this.props.requestUsers()
    }

    render () {

        const usersList = this.props.users.map( user => {
            return (
                <li className={`user-${user.id}`}>
                    <h3>{user.username}</h3>
                    <h4>{user.email}</h4>

                </li>
            )
        })
        return (
            <div className="sidebar">
                <h1>SIDEBAR</h1>
                {usersList}
            </div>
        )
    }
}