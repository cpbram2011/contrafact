
import React from 'react';

import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa';

export default class Play extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            volume: 50,
            volumeShow: false,
            currentTime: 0,
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
            setInterval(() => {
                let newTime = (this.reff.currentTime / this.reff.duration)
                this.setState({currentTime: newTime})
                console.log(this.state.currentTime)
                const progressbar = document.getElementById("progress-bar")
                progressbar.value = this.state.currentTime * 100
                }, 500);
        
        
                
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

    
    volumeSlide () {
        return (e) => {
            this.reff.volume = (e.target.value / 100)
            this.setState({volume: e.target.value})
        }
    }

    scrub () {
        return e => {
            let newTime = e.target.value / 100
            
            this.reff.currentTime = newTime * this.reff.duration
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
                
                <input id='progress-bar'
                type="range" 
                step='1' 
                min="1" 
                max="100" 
                // value={this.state.currentTime * 100} //TODO value = progress, currentVal = scrub
                onClick={this.scrub()}
                ></input>

                <div className="volume-parent">
                <FaVolumeUp id='vol-icon'
                onMouseEnter={this.volumeShow()}
                />
                <input className={this.state.volumeShow ? 'vol-slider' : 'vol-slider-hidden'} 
                type="range" 
                step='1' 
                min="1" 
                max="1000" 
                defaultValue={this.state.volume}
                onChange={this.volumeSlide()}
                ></input>
                </div>
                
                


            </div>
        )
    }
}



