
import Show from './show';
import {requestPlaylist, requestPlaylists} from '../../actions/playlist_actions'
import {requestUploaderSongs} from '../../actions/song_actions'
import {requestUser} from '../../actions/user_actions';
import {connect} from 'react-redux';


const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    id: ownProps.match.params.id,
    currentUser: state.session.id,
    playlists: state.entities.playlists,
    songs: state.entities.songs[ownProps.match.params.id]
});

const mDTP = dispatch => ({
    requestUser: userId => dispatch(requestUser(userId)),
    requestPlaylists: userId => dispatch(requestPlaylists(userId)),
    requestUploaderSongs: userId => dispatch(requestUploaderSongs(userId)),

});

export default connect(mSTP, mDTP) (Show)