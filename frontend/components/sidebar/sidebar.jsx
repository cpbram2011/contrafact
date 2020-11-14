import React from 'react';
import { FaUserFriends, FaHeart, FaComment } from 'react-icons/fa';
import {Link} from 'react-router-dom';
export default class Sidebar extends React.Component {
    
    componentDidMount () {
        this.props.requestUsers()
    }

    render () {
        const usersList = this.props.users.map( user => {
            if (user.id === this.props.currentUser) return null;
            return (
                <li className={`users-${user.id}`}>
                    <p className={`users-pic-${user.id}`}/>
                    <Link to={`user/${user.id}`} >
                    <h3>{user.username}</h3>
                    </Link>
                    <FaHeart className='fa'/>
                    <t>714</t>
                    <FaComment className='fa'/>
                    <t>174</t>

                </li>
            )
        })
        return (
            <div className="sidebar">
                <div className='label'>
                    <FaUserFriends className= 'fa-label'/>
                    <h2>Who to follow</h2>
                </div>
                {usersList}
            </div>
        )
    }
}