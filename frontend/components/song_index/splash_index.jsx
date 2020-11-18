import React from 'react';
import { FaPlayCircle, FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class SplashIndex extends React.Component {
    constructor(props){
        super(props)
        
        this.updateCurrentSong = this.updateCurrentSong.bind(this)
    }


    
    updateCurrentSong (target) {
        this.props.receiveCurrentSong(target)
        
    }

    render () {

        let songs;
        if (this.props.index === 'recent') {
            songs = Object.values(this.props.songs).reverse()
        } else {
            
            songs = Object.values(this.props.songs)
        }
        return (
            <div className='splash-index'>
                
                {songs.map(song => {
                    
                    return (

                    <div className={`song-tile-${song.id}`}>
                    <div className="splash-cover"
                    onClick={() => this.updateCurrentSong(song.id)}
                    
                    >

                    <FaPlayCircle className="splash-play-circle"
                        
                        />
                    <img src={song.cover} className={`cover-tile`}
                        />
                    </div>
                    <Link to={`/song/${song.id}`}>

                    <p className='tile-title'>{song.title}</p>
                    </Link>
                    <p className='tile-artist'>{song.artist}</p>
                    </div>
                        
                    )
                })}
            </div>
        )
    }
}