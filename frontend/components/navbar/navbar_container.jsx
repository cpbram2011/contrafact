import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions'
import {logout} from '../../actions/session_actions';
import Navbar from './navbar';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Navbar);
