import {connect} from 'react-redux';
import Playlist from './playlist';
import {requestPlaylist, requestPlaylists} from '../../actions/playlist_actions';




const mSTP = (state, ownProps) => ({
    playlist: state.entities.playlists[ownProps.tag],
    songs: state.entities.songs,
})

const mDTP = dispatch => ({
    requestPlaylist: id => dispatch(requestPlaylist(id))
})

export default connect(mSTP, mDTP)(Playlist);

