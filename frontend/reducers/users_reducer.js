import {LOGIN_USER} from '../actions/session_actions';
import {RECEIVE_USERS} from '../actions/user_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, {[action.user.id]: action.user});
        case RECEIVE_USERS:             
        return Object.assign({}, state, action.users);
        default:
            return state;
    }
};

