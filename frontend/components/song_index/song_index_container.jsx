import {connect} from 'react-redux';
import SongIndex from './song_index';
import {requestSongs} from '../../actions/song_actions';

const mSTP = state => ({
    songs: Object.values(state.entities.songs)
});

const mDTP = dispatch => ({

    requestSongs: () => dispatch(requestSongs())
})

export default connect(mSTP, mDTP)(SongIndex);