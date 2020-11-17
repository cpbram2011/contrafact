import React from 'react';
import { FaPlayCircle, FaHeart } from 'react-icons/fa';


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
                    
            <div className={`item-${song.id}`} key={`item-${song.id}`}>      
                <div className='left'>

                
                    <div className="cover"
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
                    <p className="">{song.artist}</p>
                    <p></p> 
                </div> 
                <div 
                    className={ false ? 'like' : 'like-hidden'}>              
                </div>
            </div>  
        )
      
    }
}
