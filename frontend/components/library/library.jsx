import React from 'react';

export default class Library extends React.Component {

    componentDidMount() {
        this.props.requestPlaylists(this.props.currentUser)
    }
    render () {
        let playlists = Object.values(this.props.playlists).map(playlist => {
            if (playlist.author_id != this.props.currentUser) return null;
            let songs = playlist.songs.map(song => {
                return (
                    <li>
                        <p>{song.title}</p>
                        <p>{song.artist}</p>
                    </li>
                )
            })
            return (
                <li className="playlistcontainer">
                    <h2>{playlist.title}</h2>
                    {songs}
                </li>
            )
        })
        return (
            <div className="library">
                <h1>library</h1>
                {playlists}
                <button
                onClick={() => this.props.openModal('playlistForm')}
                >Create Playlist</button>
            </div>
        )
    }
}