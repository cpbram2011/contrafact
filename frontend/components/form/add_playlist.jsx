import React from 'react';
import { addToPlaylist } from '../../util/playlist_api_util'
export default class AddPlaylist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            playlist: null,
            errors: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount(){
        this.props.requestPlaylists(this.props.currentUser)
    }

    handleSubmit (e) {
        e.preventDefault();
        if (!this.state.playlist) {
            this.setState({errors: 'Please select a playlist'})
            return null;
        }
        let formData = new FormData();
        formData.append('song[id]', this.props.songId)
        addToPlaylist(this.state.playlist, formData)
        this.props.closeModal();

    }

    updatePlaylist () {
        return e => {
            this.setState({playlist: e.target.value})
        }
    }

    render () {
        let radios = Object.values(this.props.playlists).map(playlist => {
            if (playlist.author_id != this.props.currentUser) return null;
            return (
                <label>
                    <input type="radio" name="playlist" id="" value={playlist.id} onChange={this.updatePlaylist()}/>
                    {playlist.title}</label>

            )
        })
        return (
            <div className="addplaylist">
                <h3>Add to Playlist</h3>
                {radios}

                <button onClick={this.handleSubmit}>Submit</button>
            </div>

        )
    }
}