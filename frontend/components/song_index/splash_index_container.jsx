import {connect} from 'react-redux';
import SplashIndex from './splash_index';
import {requestSongs, receiveCurrentSong, requestRecent} from '../../actions/song_actions';
import {openModal} from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    songs: state.entities.songs[ownProps.index]
});

const mDTP = dispatch => {
    return ({
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),

    requestSongs: () => dispatch(requestSongs()),
    openModal: (modal) => dispatch(openModal(modal)),
})}

export default connect(mSTP, mDTP)(SplashIndex);