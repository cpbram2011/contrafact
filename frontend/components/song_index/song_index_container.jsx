import {connect} from 'react-redux';
// import SplashIndex from './splash_index';
import {requestSongs, receiveCurrentSong, requestRecent} from '../../actions/song_actions';
import {requestPlaylist} from '../../actions/playlist_actions'
import {openModal} from '../../actions/modal_actions';
import SongIndex from './song_index'
const mSTP = (state, ownProps) => {
    let index = ownProps.index || 'all';
    return ({
    songs: Object.values(state.entities.songs[index] || {}),
    index
})};

const mDTP = dispatch => {
    return ({
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    requestSongs: () => dispatch(requestSongs()),
    requestPlaylist: (id) => dispatch(requestPlaylist(id)),
    
    requestRecent: () => dispatch(requestRecent()),
    openModal: (modal) => dispatch(openModal(modal))
})}

export default connect(mSTP, mDTP)(SongIndex);