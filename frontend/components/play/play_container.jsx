
import {connect} from 'react-redux'
import Play from './play';
import {receiveCurrentSong} from '../../actions/song_actions'

const mSTP = state => {
    return({
    currentSong: state.session.currentSong, 
    songs: Object.assign({}, state.entities.songs.all)
})}

const mDTP = dispatch => ({
    receiveCurrentSong: (id) => dispatch(receiveCurrentSong(id))
})

export default connect(mSTP, mDTP)(Play)