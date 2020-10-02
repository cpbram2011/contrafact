import React from 'react';


export default class SongItem extends React.Component {


    constructor(props){
    super(props)
    this.state = {
        like: true

    }
    
}



    render () {
        let {song, index } = this.props;
        return (
                    
            <div className={`song-item-${song.id}`} key={`song-item-${song.id}`}>      
                <div className='item-left'>

                
                    <div className="d-cover"
                        onClick={this.props.updateCurrentSong}
                    >
                        <FaPlayCircle className="play-circle"
                        onClick={this.props.updateCurrentSong}
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
                    className={ false ? 'like' : 'like-hidden'}>              
                </div>
            </div>  
        )
      
    }
}
