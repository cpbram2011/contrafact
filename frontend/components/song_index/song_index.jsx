import React from 'react';

export default class SongIndex extends React.Component {

    constructor(props){
        super(props)
    }


    componentDidMount() {
        this.props.requestSongs();
        
    }
    
    render () {
        return (
            <div className='song-index'>
                <h1>All Songs</h1>
                
                
                {this.props.songs.map(x => {
                    debugger;
                    return (
                        
                            <div className={`song-item-${x.id}`}>

                                
                                <img className="cover-art" src={x.cover} alt=""/>
                                <div className="song-details">

                                <p>{x.title}</p>
                                <p>{x.artist}</p>
                                <p></p>
                                <audio controls src={x.track}></audio>
                                </div>
                                
                            </div>
                         
                    )
                })}
                
            </div>
        )
    }
}