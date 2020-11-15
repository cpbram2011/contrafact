import React from 'react';
import { FaPlayCircle, FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class PlaylistIndex extends React.Component {
    constructor(props){
        super(props)
        this.updateCurrentSong = this.updateCurrentSong.bind(this)
    }


    componentDidMount() {
        this.props.requestPlaylists(this.props.id)
        
    }
    
    updateCurrentSong (e) {
        this.props.receiveCurrentSong(e)
        
    }

    render () {
        
        const playlists = this.props.playlists.map((playlist, i) => {
            if (playlist.author_id != this.props.id) return null;
            return (
                <div className={`playlist-index-${i}`}>
                    <h1>{playlist.title}</h1>
                    {
                        Object.values(playlist.songs).map(song => {
                            return (
                                <li>
                                    <h1>{song.title}</h1>
                                    <h2>{song.artist}</h2>

                                </li>
                            )
                        })
                    }
                </div>
            )
        })
        return (
            <div className='playlist-holder'>
                
                <h1>hello</h1>
                <h1>hello</h1>
                {playlists}
            </div>
        )
    }
}