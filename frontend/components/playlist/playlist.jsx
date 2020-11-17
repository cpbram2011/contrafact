import React from 'react';
import SongItem from '../songitem/item'

export default class Playlist extends React.Component {


    componentDidMount(){
        if (this.props.tag) {
            this.props.requestPlaylistName(this.props.tag);
            this.props.requestPlaylist(this.props.tag);
        } else {
            this.props.requestPlaylistName(this.props.match.params.id)
            this.props.requestPlaylist(this.props.match.params.id)
        }
    }
    render () {
        if (!this.props.playlist) return null;
        if (!this.props.songs) return null;
        let {playlist, songs} = this.props;

        let songMap = Object.values(songs).map((song, i) => {
            return (
            <SongItem song={song} index={i} />
        )})
        return (

            <div className="playlist">
                <div className="playlist-deets">
                <h2 className='title'>{playlist.title}</h2>

                </div>
                {songMap}
            </div>
        )
    }
}