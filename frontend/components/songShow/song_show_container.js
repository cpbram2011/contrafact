import {connect} from 'react-redux';
import {requestSong} from '../../actions/song_actions';
import SongShow from './song_show';


const mSTP = (state, ownProps) => ({
    songs: state.entities.songs,
    id: ownProps.match.params.id
});

const mDTP = dispatch => ({
    requestSong: songId => dispatch(requestSong(songId))
});

export default connect(mSTP, mDTP)(SongShow)
