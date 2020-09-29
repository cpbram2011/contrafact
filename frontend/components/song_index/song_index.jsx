import React from 'react';

export default class SongIndex extends React.Component {

    constructor(props){
        super(props)
        this.updateCurrentSong = this.updateCurrentSong.bind(this)
    }


    componentDidMount() {
        this.props.requestSongs();
        
    }
    
    updateCurrentSong (e) {
       debugger;
        this.props.requestCurrentSong(e.target.id)
        
    }

    render () {
        return (
            <div className='song-index'>
                <h1>All Songs</h1>
                
                
                {this.props.songs.map(song => {
                    
                    return (
                        
                        <div key={`song-item-${song.id}`}
                        
                        >

                                
                                <img className="cover-art" src={song.cover} 
                                onClick={this.updateCurrentSong}
                                id={song.id}
                                alt=""/>
                                <div className="song-details">

                                <p>{song.title}</p>
                                <p>{song.artist}</p>
                                <p></p>

                                </div>
                                
                            </div>
                         
                    )
                })}
                
            </div>
        )
    }
}