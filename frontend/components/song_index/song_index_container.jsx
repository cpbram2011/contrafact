import {connect} from 'react-redux';
import SongIndex from './song_index';
import {requestSongs, receiveCurrentSong, requestCurrentSong} from '../../actions/song_actions';

const mSTP = state => ({
    songs: Object.values(state.entities.songs)
});

const mDTP = dispatch => {
    debugger;
    return ({

    requestSongs: () => dispatch(requestSongs()),

    requestCurrentSong: (id) => dispatch(requestCurrentSong(id))
})}

export default connect(mSTP, mDTP)(SongIndex);