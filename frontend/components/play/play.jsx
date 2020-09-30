
import React from 'react';

import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa';

export default class Play extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            volumeShow: false,
            currentSongTitle: 'this thing' //this.props.curren
        }
        this.reff = React.createRef();
        this.pause = this.pause.bind(this)
    }


    componentDidUpdate (prevProps) {
        if (prevProps.currentSong !== this.props.currentSong) {
            this.reff.play()
            this.setState({isPlaying: true})
            this.volumeShow = this.volumeShow.bind(this)
        }
    }

    pause () {
        if (this.state.isPlaying) {
            this.reff.pause()
            this.setState({isPlaying: false})
        } else {
            this.reff.play()
            this.setState({isPlaying: true})
        }

    }

    volumeShow () {
            
        return e => {
            
            
            this.setState({volumeShow: !this.state.volumeShow})
            
        }
    }
    
    
    render () {
        let load;
        if (this.props.currentSong) {
            load = this.props.songs[this.props.currentSong]
        } else {
            load = {title: '', artist: '', track: ''}
        }

        
        return (
            <div className={`player${this.props.currentSong ? '' : '-hidden'}`}>
                
                <button className='play-pause' onClick={this.pause}>{this.state.isPlaying ? <FaPause/> : <FaPlay/>}</button>
                
                <audio 
                id="audio"
                src={load.track}
                ref={(input) => {this.reff = input}}
                ></audio>
               <p>{load.title}</p>-
                <p>{load.artist}</p>

                <div className="volume-parent">
                <FaVolumeUp 
                onMouseEnter={this.volumeShow()}
                />
                <input className={this.state.volumeShow ? 'vol-slider' : 'vol-slider-hidden'} type="range" min="1" max="100" value="50" ></input>
                


                </div>
            </div>
        )
    }
}



