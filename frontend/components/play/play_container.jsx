
import {connect} from 'react-redux'
import Play from './play';


const mSTP = state => {
    return({
    currentSong: state.session.currentSong,
    songs: Object.assign({}, state.entities.songs)
    
})}

export default connect(mSTP, null)(Play)