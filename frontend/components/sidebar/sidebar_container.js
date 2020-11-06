import {connect} from 'react-redux';
import {requestUsers} from '../../actions/user_actions';
import Sidebar from './sidebar';

const mSTP = state => ({
    users: Object.values(state.entities.users),
    currentUser: state.session.id
});


const mDTP = dispatch => ({
    requestUsers: () => dispatch(requestUsers())
});

export default connect(mSTP, mDTP)(Sidebar)