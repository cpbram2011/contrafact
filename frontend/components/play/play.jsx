
import React from 'react';
import {fetchSong} from '../../util/song_api_util';

export default class PlayContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSong: null
        }
    }

    componentDidMount () {
        fetchSong().then(song => {
            this.setState({currentSong: song})
        })
    }
    
    
    render () {
        fetchSong().then(x => {

            debugger;
        })
        // console.log(song.track)
        return (
            <div className="player">
                <audio src={'song.track'}></audio>

                XXXXX
                XXXXX
            </div>
        )
    }
}
