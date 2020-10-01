
import {connect} from 'react-redux'
import Play from './play';
import {receiveCurrentSong} from '../../actions/song_actions'

const mSTP = state => {
    // const song = state.en
    return({
    currentSong: state.session.currentSong, // 53
                //: 
    songs: Object.assign({}, state.entities.songs)  //
    
})}

const mDTP = dispatch => ({
    receiveCurrentSong: (id) => dispatch(receiveCurrentSong(id))
})

export default connect(mSTP, mDTP)(Play)