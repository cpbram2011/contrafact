
import React from 'react';

import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

export default class Play extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            volume: 50,
            volumeShow: false,
            currentTime: 0,
            muted: false

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
                this.setState({currentTime: newTime});
                const progressbar = document.getElementById("progress-bar");
                progressbar.value = this.state.currentTime * 1000;
                this.reff.volume = this.state.muted ? 0 : this.state.volume / 100

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
            this.setState({volume: e.target.value, muted: false})
        }
    }

    volumeMute () {
        return e => {
            this.setState({muted: !this.state.muted})
            
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

    formatTime(time){
        time = Math.floor(time);
        let sec = time % 60;
        let min = (time - sec) / 60;
        if (sec < 10) sec = '0' + sec
        if (min < 10) min = '0' + min
        if (Number.isNaN(min) || Number.isNaN(sec)) return null;
        return `${min} : ${sec}`
    }
    
    render () {
        let load;
        if (this.props.currentSong) {
            load = this.props.songs[this.props.currentSong]
        } else {
            load = {title: '', artist: '', track: '', cover: ''}
        }
        const currentTime = this.formatTime(this.reff.currentTime)
        const duration = this.formatTime(this.reff.duration)
        return (
            <div className={`player${this.props.currentSong ? '' : '-hidden'}`}>
                
                <button onClick={this.prevSong.bind(this)}><FaAngleDoubleLeft /></button>
                <button className='play-pause' onClick={this.pause}>{this.state.isPlaying ? <FaPause/> : <FaPlay/>}</button>
                <button onClick={this.nextSong.bind(this)}><FaAngleDoubleRight /></button>
                <audio 
                id="audio"
                src={load.track}
                ref={(input) => {this.reff = input}}
                ></audio>
                <p className="timestamps">{currentTime}</p>
                <input id='progress-bar'
                type="range" 
                step='1' 
                min="1" 
                max="1000" 
                defaultValue ="0"
                onClick={this.scrub()}
                ></input>
                <p className="timestamps">{duration}</p>
                <div className="volume-parent">
                    {this.state.muted ? (
                        <FaVolumeMute id='vol-icon'
                        onMouseEnter={this.volumeShow()}
                        onClick={this.volumeMute()}
                        />
                        ):(
                        <FaVolumeUp id='vol-icon'
                        onMouseEnter={this.volumeShow()}
                        onClick={this.volumeMute()}
                        />

                    )}
                <input 
                id='vol-slider'
                className={this.state.volumeShow ? 'vol-slider' : 'vol-slider-hidden'} 
                type="range" 
                step='1' 
                min="1" 
                max="100" 
                defaultValue={this.state.muted ? 0 : this.state.volume}
                onChange={this.volumeSlide()}
                ></input>
                </div>
                <div className='playing-song'>    
                <img src={load.cover} alt="" />               
                <p>{load.title}</p>
                <p>-</p>
                <p>{load.artist}</p>
                </div>
                
            </div>
        )
    }
}



