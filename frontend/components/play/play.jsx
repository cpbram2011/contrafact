
import React from 'react';
import {fetchSong} from '../../util/song_api_util';

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
        debugger;
        return (
            <div className="player">
                
                <audio 
                id="audio"
                src={Boolean(this.props.currentSong) ? this.props.songs[this.props.currentSong].track : ''}
                ref={(input) => {this.reff = input}}
                ></audio>
                <button onClick={this.pause}>{this.state.isPlaying ? <FaPause/> : <FaPlay/>}</button>
            </div>
        )
    }
}
