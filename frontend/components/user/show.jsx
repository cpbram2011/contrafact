import React from 'react';

export default class UserShow extends React.Component{

    componentDidMount() {
        this.props.requestUser(this.props.id)
    }

    render () {
        const user = this.props.users[this.props.id];
        if (user === undefined) return null
        return (
            <div className="user-show">
                <h1>{user.username}</h1>
                <h1>{user.email}</h1>
            </div>
        )
    }
}
