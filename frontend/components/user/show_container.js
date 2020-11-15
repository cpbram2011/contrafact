
import Show from './show';
import {requestPlaylist, requestPlaylists} from '../../actions/playlist_actions'
import {requestUser} from '../../actions/user_actions';
import {connect} from 'react-redux';


const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    id: ownProps.match.params.id,
    currentUser: state.session.id,
    playlists: state.entities.playlists
});

const mDTP = dispatch => ({
    requestUser: userId => dispatch(requestUser(userId)),
    requestPlaylists: userId => dispatch(requestPlaylists(userId))
});

export default connect(mSTP, mDTP) (Show)