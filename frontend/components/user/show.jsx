import React from 'react';
import SongItem from '../songitem/item';

export default class UserShow extends React.Component{

    componentDidMount() {
        this.props.requestUser(this.props.id)
        this.props.requestPlaylists(this.props.id)
    }

    render () {
        const user = this.props.users[this.props.id];
        if (!user) return null;
        let playIndicies = Object.values(this.props.playlists).map(playlist => {
            if (playlist.author_id != this.props.id) return null;
            let songs = playlist.songs.map((song, i) => (
                <SongItem song={song} index={i} />
            ))
            return (
                <div>
                    <h1>{playlist.title}</h1>
                        {songs}
                </div>
            )
        });
        return (
            <div className="user-show">
                <h1>{user.username}</h1>
                <h1>{user.email}</h1>
                {playIndicies}
            </div>
        )
    }
}
