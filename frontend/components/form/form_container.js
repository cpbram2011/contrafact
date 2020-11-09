import {connect} from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import {createSong} from '../../actions/song_actions';
import Form from './form';

const mSTP = state => ({
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    createSong: song => dispatch(createSong(song)),
    closeModal: () => dispatch(closeModal())
});


export default connect(mSTP, mDTP)(Form);

