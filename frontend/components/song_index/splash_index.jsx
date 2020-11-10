import React from 'react';
import { FaPlayCircle, FaHeart } from 'react-icons/fa';


export default class SplashIndex extends React.Component {
    constructor(props){
        super(props)
        
        this.updateCurrentSong = this.updateCurrentSong.bind(this)
    }


    // componentDidMount () {
    //     this.props.requestRecent()
    // }
    
    updateCurrentSong (target) {
        this.props.receiveCurrentSong(target)
        
    }

    render () {
        return (
            <div className='splash-index'>
                
                {this.props.songs.map(song => {
                    
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
                    <p className='tile-title'>{song.title}</p>
                    <p className='tile-artist'>{song.artist}</p>
                    </div>
                        
                    )
                })}
            </div>
        )
    }
}