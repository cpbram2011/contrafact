import React from 'react';

export default class SongShow extends React.Component {


    componentDidMount () {

        this.props.requestSong(this.props.id)
    }
    render () {
        const song = this.props.songs[this.props.id]
        if (Object.keys(this.props.songs).length === 0 ) return null;
        return (
            <div className="song-show">
                <h1>Song Title</h1>
                <button>play</button>
                <h1>
                    {song.title}
                </h1>
                <h1>
                    {song.artist}
                </h1>
                <h1></h1>
            </div>
        )
    }
}