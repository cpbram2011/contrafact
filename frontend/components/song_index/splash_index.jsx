import React from 'react';
import { FaPlayCircle, FaHeart } from 'react-icons/fa';


export default class SplashIndex extends React.Component {


    componentDidMount () {
        this.props.requestSongs()
    }
    render () {
        return (
            <div className='splash-index'>
                
                {this.props.songs.map(song => {
                    
                    return (

                    <div className={`song-tile-${song.id}`}>
                    <div className="splash-cover">

                    <img src={song.cover} className={`cover-tile`}/>
                    <FaPlayCircle className="splash-play-circle"
                            onClick={this.updateCurrentSong}
                            />
                    </div>
                    <p className='tile-title'>{song.title}</p>
                    <p className='tile-artist'>{song.artist}</p>
                    </div>
                        
                    )
                })}
            </div>
        )
    }
}