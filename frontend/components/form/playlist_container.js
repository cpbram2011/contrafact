import {connect} from 'react-redux';
import PlaylistForm from './playlist';
import {createPlaylist} from '../../actions/playlist_actions';
import {closeModal} from '../../actions/modal_actions'

const mSTP = state => ({
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal()),

});

export default connect(mSTP, mDTP)(PlaylistForm);

