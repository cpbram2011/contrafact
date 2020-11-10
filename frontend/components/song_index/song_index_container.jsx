import {connect} from 'react-redux';
// import SplashIndex from './splash_index';
import {requestSongs, receiveCurrentSong, requestRecent} from '../../actions/song_actions';
import {openModal} from '../../actions/modal_actions';
import SongIndex from './song_index'
const mSTP = state => ({
    songs: Object.values(state.entities.songs.all)
});

const mDTP = dispatch => {
    return ({
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    requestSongs: () => dispatch(requestSongs()),
    
    requestRecent: () => dispatch(requestRecent()),
    openModal: (modal) => dispatch(openModal(modal))
})}

export default connect(mSTP, mDTP)(SongIndex);