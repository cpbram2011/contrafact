
import Show from './show';

import {requestUser} from '../../actions/user_actions';
import {connect} from 'react-redux';


const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    id: ownProps.match.params.id,
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    requestUser: userId => dispatch(requestUser(userId))
});

export default connect(mSTP, mDTP) (Show)