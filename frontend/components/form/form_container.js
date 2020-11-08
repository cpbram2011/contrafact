import {connect} from 'react-redux';
import {createSong} from '../../actions/song_actions';
import Form from './form';

const mSTP = state => ({
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    createSong: song => dispatch(createSong(song))
});


export default connect(mSTP, mDTP)(Form);

