import {connect} from 'react-redux';
import Library from './library';
import {openModal} from '../../actions/modal_actions'
import {requestPlaylist, requestPlaylists} from '../../actions/playlist_actions'
const mSTP = state => ({
    playlists: state.entities.playlists,
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    requestPlaylist: playlistId => dispatch(requestPlaylist(playlistId)),
    requestPlaylists: userId => dispatch(requestPlaylists(userId)),
    openModal: modal => dispatch(openModal(modal)),
})

export default connect(mSTP, mDTP)(Library)

