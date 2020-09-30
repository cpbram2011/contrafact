
import React from 'react';

import { FaPlay, FaPause } from 'react-icons/fa';

export default class Play extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
        }
        this.reff = React.createRef();
        this.pause = this.pause.bind(this)
    }


    componentDidUpdate (prevProps) {
        if (prevProps.currentSong !== this.props.currentSong) {
            this.reff.play()
            this.setState({isPlaying: true})
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
    
    
    render () {
        let load;
        if (this.props.currentSong) {
            load = this.props.songs[this.props.currentSong]
        } else {
            load = {title: '', artist: '', track: ''}
        }


        return (
            <div className="player">
                
                <button className='play-pause' onClick={this.pause}>{this.state.isPlaying ? <FaPause/> : <FaPlay/>}</button>
                
                <audio 
                id="audio"
                src={load.track}
                ref={(input) => {this.reff = input}}
                ></audio>
               <p>{load.title}</p>-
                <p>{load.artist}</p>
            </div>
        )
    }
}
