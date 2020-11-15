import {connect} from 'react-redux';
// import SplashIndex from './splash_index';
import {requestSongs, receiveCurrentSong, requestPlaylist, requestPlaylists} from '../../actions/song_actions';
import {openModal} from '../../actions/modal_actions';
import PlaylistIndex from './playlist_index'


const mSTP = (state) => ({
    songs: Object.values(state.entities.songs.all),
    playlists: Object.values(state.entities.playlists),
    
});

const mDTP = dispatch => {
    return ({
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    requestSongs: () => dispatch(requestSongs()),
    requestPlaylist: playlistId => dispatch(requestPlaylist(playlistId)),
    requestPlaylists: userId => dispatch(requestPlaylists(userId))
    
})}

export default connect(mSTP, mDTP)(PlaylistIndex);