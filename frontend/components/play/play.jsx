
import React from 'react';

import { FaPlay, FaPause, FaVolumeUp, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

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
        this.nextSong = this.nextSong.bind(this)
    }


    componentDidUpdate (prevProps) {
        if (prevProps.currentSong !== this.props.currentSong) {
            this.reff.play()
            this.setState({isPlaying: true})
            setInterval(() => {
                let newTime = (this.reff.currentTime / this.reff.duration)
                if (newTime > .98) {
                    this.nextSong()
                }
                this.setState({currentTime: newTime})
                const progressbar = document.getElementById("progress-bar")
                progressbar.value = this.state.currentTime * 1000
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
            let newTime = e.target.value / 1000
            
            this.reff.currentTime = newTime * this.reff.duration
        }
    }

    nextSong (e) {
        let queue = Object.values(this.props.songs)
        let current = this.props.currentSong
        let nextTrack = queue.find(song => song.id > current) || queue[0];


        this.props.receiveCurrentSong(nextTrack.id)
    }
    
    prevSong (e) {
        let queue = Object.values(this.props.songs).reverse()
        let current = this.props.currentSong
        let nextTrack = queue.find(song => song.id < current) || queue[0];

        this.props.receiveCurrentSong(nextTrack.id)
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
                
                <button onClick={this.prevSong.bind(this)}><FaChevronLeft /></button>
                <button className='play-pause' onClick={this.pause}>{this.state.isPlaying ? <FaPause/> : <FaPlay/>}</button>
                <button onClick={this.nextSong.bind(this)}><FaChevronRight /></button>
                <audio 
                id="audio"
                src={load.track}
                ref={(input) => {this.reff = input}}
                ></audio>
               <p>{load.title}</p>
                <p>-</p>
                <p>{load.artist}</p>
                
                <input id='progress-bar'
                type="range" 
                step='1' 
                min="1" 
                max="1000" 
                onClick={this.scrub()}
                ></input>

                <div className="volume-parent">
                <FaVolumeUp id='vol-icon'
                onMouseEnter={this.volumeShow()}
                />
                <input 
                id='vol-slider'
                className={this.state.volumeShow ? 'vol-slider' : 'vol-slider-hidden'} 
                type="range" 
                step='1' 
                min="1" 
                max="100" 
                defaultValue={this.state.volume}
                onChange={this.volumeSlide()}
                ></input>
                </div>
                
            </div>
        )
    }
}



