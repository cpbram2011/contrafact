import {connect} from 'react-redux';
import {requestSong, receiveCurrentSong, deleteSong } from '../../actions/song_actions';
import SongShow from './song_show';
import {openModal} from '../../actions/modal_actions';


const mSTP = (state, ownProps) => ({
    songs: state.entities.songs.all,
    id: ownProps.match.params.id,
    currentUser: state.session.id,
    currentUserName: state.entities.users[state.session.id].username
});

const mDTP = dispatch => ({
    requestSong: songId => dispatch(requestSong(songId)),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    deleteSong: songId => dispatch(deleteSong(songId)),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
});

export default connect(mSTP, mDTP)(SongShow)
