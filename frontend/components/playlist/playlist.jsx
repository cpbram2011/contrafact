import React from 'react';
import SongItem from '../songitem/item'

export default class Playlist extends React.Component {


    componentDidMount(){
        this.props.requestPlaylist(this.props.tag)
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

                <h3>{playlist.title}</h3>
                {songMap}
            </div>
        )
    }
}