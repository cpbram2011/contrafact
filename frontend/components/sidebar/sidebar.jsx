import React from 'react';
import { FaUserFriends } from 'react-icons/fa';

export default class Sidebar extends React.Component {
    
    componentDidMount () {
        this.props.requestUsers()
    }

    render () {
        const usersList = this.props.users.map( user => {
            if (user.id === this.props.currentUser) return null;
            return (
                <li className={`user-${user.id}`}>
                    <h3>{user.username}</h3>
                    <h4>{user.email}</h4>

                </li>
            )
        })
        return (
            <div className="sidebar">
                <FaUserFriends />
            <h3>Who to follow</h3>
                {usersList}
            </div>
        )
    }
}