import {connect} from 'react-redux';
import Playlist from './playlist';
import {requestPlaylist, requestPlaylists} from '../../actions/playlist_actions';




const mSTP = (state, ownProps) => {
    let index = ownProps.tag || ownProps.match.params.id
    return ({
    playlist: state.entities.playlists[index],
    songs: state.entities.songs[index],
})}

const mDTP = dispatch => ({
    requestPlaylist: id => dispatch(requestPlaylist(id))
})

export default connect(mSTP, mDTP)(Playlist);

