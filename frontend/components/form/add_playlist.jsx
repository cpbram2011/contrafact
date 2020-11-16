import React from 'react';

export default class AddPlaylist extends React.Component {
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.requestPlaylists(this.props.currentUser)
    }

    render () {
        let radios = Object.values(this.props.playlists).map(playlist => {
            if (playlist.author_id != this.props.currentUser) return null;
            return (
                <label>{playlist.title}
                    <input type="radio" name="playlist" id=""/>
                </label>

            )
        })
        return (
            <div className="addplaylist">
                <h3>Add to Playlist</h3>
                {radios}
                <button>Submit</button>
            </div>

        )
    }
}