import {connect} from 'react-redux';
import { requestPlaylists } from '../../actions/playlist_actions';

import AddPlaylist from './add_playlist';


const mSTP = state => ({
    playlists: state.entities.playlists,
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    requestPlaylists: id => dispatch(requestPlaylists(id))
});


export default connect(mSTP, mDTP)(AddPlaylist)