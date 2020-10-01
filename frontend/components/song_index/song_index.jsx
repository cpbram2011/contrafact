import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
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
                <h1>All Songs</h1>
                
                
                {this.props.songs.map((song, i )=> {
                    
                    return (
                        
                        <div className={`song-item-${song.id}`} key={`song-item-${song.id}`}>      
                        
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

                            <p>{i+1}</p>
                            <p className="title">{song.title}</p>-
                            <p className="artist">{song.artist}</p>
                            <p></p> 

                                
                        </div>
                         
                    )
                })}
                <button onClick={() =>this.props.openModal('form')} id='form'>upload
                </button>

            </div>
        )
    }
}