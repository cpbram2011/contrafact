import {connect} from 'react-redux';
import {requestSong, receiveCurrentSong, deleteSong } from '../../actions/song_actions';
import SongShow from './song_show';


const mSTP = (state, ownProps) => ({
    songs: state.entities.songs,
    id: ownProps.match.params.id,
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    requestSong: songId => dispatch(requestSong(songId)),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    deleteSong: songId => dispatch(deleteSong(songId))
});

export default connect(mSTP, mDTP)(SongShow)
