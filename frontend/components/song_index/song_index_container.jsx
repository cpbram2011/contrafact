import {connect} from 'react-redux';
import SongIndex from './song_index';
import {requestSongs, receiveCurrentSong} from '../../actions/song_actions';
import {openModal} from '../../actions/modal_actions';

const mSTP = state => ({
    songs: Object.values(state.entities.songs)
});

const mDTP = dispatch => {
    return ({

    requestSongs: () => dispatch(requestSongs()),
    openModal: (modal) => dispatch(openModal(modal)),
    receiveCurrentSong: (id) => dispatch(receiveCurrentSong(id))
})}

export default connect(mSTP, mDTP)(SongIndex);