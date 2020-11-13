import React from 'react';
import { FaPlayCircle, FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class SongIndex extends React.Component {
    constructor(props){
        super(props)
        
        this.updateCurrentSong = this.updateCurrentSong.bind(this)
    }


    componentDidMount() {
        this.props.requestSongs();
        this.props.requestRecent();
    }
    
    updateCurrentSong (e) {
        this.props.receiveCurrentSong(e)
        
    }

    render () {
        
        return (
            <div className='song-index'>
                
                <img className='city' src="https://contrafact-seeds.s3.us-east-2.amazonaws.com/city-skyline.jpg" alt="" srcset=""/>
                {this.props.songs.map((song, index )=> {
                    let like = true
                    
                    return (
                        
                        <div className={`song-item-${song.id}`} key={`song-item-${song.id}`}>      
                            <div className='item-left'>

                            
                            <div className="d-cover"
                                onClick={() => this.updateCurrentSong(song.id)}
                            >
                                <FaPlayCircle className="play-circle"
                                onClick={() => this.updateCurrentSong(song.id)}
                                />
                                <img className="cover-art" src={song.cover} 
                                id={song.id}
                                alt=""/>
                            </div>

                            <p>{index + 1}</p>
                            <Link to={`song/${song.id}`}>
                            <p className="title">{song.title}</p>
                            </Link>
                            <p>-</p>
                            <p className="artist">{song.artist}</p>
                            <p></p> 
                            </div> 
                            <div 
                            className={ true ? 'like' : 'like-hidden'}
                            ></div>

                            
                        </div>
                         
                    )
                })}
                
            </div>
        )
    }
}