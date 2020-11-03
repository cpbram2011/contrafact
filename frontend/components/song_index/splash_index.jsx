import React from 'react';


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
                    <img src={song.cover} className={`cover-tile`}/>
                    <p className='tile-title'>{song.title}</p>
                    <p className='tile-artist'>{song.artist}</p>
                    </div>
                        
                    )
                })}
            </div>
        )
    }
}