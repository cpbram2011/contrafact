import React from 'react';
import { FaPlayCircle, FaHeart } from 'react-icons/fa';

export default class SongIndex extends React.Component {
    constructor(props){
        super(props)
        
        this.updateCurrentSong = this.updateCurrentSong.bind(this)
    }


    componentDidMount() {
        this.props.requestSongs();
        
    }
    
    updateCurrentSong (e) {
        this.props.receiveCurrentSong(e.target.id)
        
    }

    render () {
        return (
            <div className='song-index'>
                
                
                {this.props.songs.map((song, index )=> {
                    let like = true
                    
                    return (
                        
                        <div className={`song-item-${song.id}`} key={`song-item-${song.id}`}>      
                            <div className='item-left'>

                            
                            <div className="d-cover"
                                onClick={this.updateCurrentSong}
                            >
                                <FaPlayCircle className="play-circle"
                                onClick={this.updateCurrentSong}
                                />
                                <img className="cover-art" src={song.cover} 
                                id={song.id}
                                alt=""/>
                            </div>

                            <p>{index + 1}</p>
                            <p className="title">{song.title}</p>-
                            <p className="artist">{song.artist}</p>
                            <p></p> 
                            </div> 
                            <div 
                            className={ true ? 'like' : 'like-hidden'}
                            ></div>

                            
                        </div>
                         
                    )
                })}
                {/* <button onClick={() =>this.props.openModal('form')} id='form'>upload
                </button> */}

            </div>
        )
    }
}