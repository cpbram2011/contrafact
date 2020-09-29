import {connect} from 'react-redux';
import SongIndex from './song_index';
import {requestSongs, receiveCurrentSong} from '../../actions/song_actions';

const mSTP = state => ({
    songs: Object.values(state.entities.songs)
});

const mDTP = dispatch => {
    debugger;
    return ({

    requestSongs: () => dispatch(requestSongs()),

    receiveCurrentSong: (id) => dispatch(receiveCurrentSong(id))
})}

export default connect(mSTP, mDTP)(SongIndex);