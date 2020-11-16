import React from 'react';
import Playlist from '../playlist/playlist_container';
export default class Library extends React.Component {

    componentDidMount() {
        this.props.requestPlaylists(this.props.currentUser)
    }
    render () {
        let playlists = Object.values(this.props.playlists).map(playlist => {
            if (playlist.author_id != this.props.currentUser) return null;
            return (<Playlist tag={playlist.id} />)
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


