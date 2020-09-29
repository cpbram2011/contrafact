
import {connect} from 'react-redux'
import Play from './play';


const mSTP = state => ({
    currentSong: state.session.currentSong,
    songs: state.entities.songs
})

export default connect(mSTP, null)(Play)