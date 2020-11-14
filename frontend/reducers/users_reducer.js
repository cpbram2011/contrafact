import {LOGIN_USER} from '../actions/session_actions';
import {RECEIVE_USERS, RECEIVE_USER} from '../actions/user_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, {[action.user.id]: action.user});
        case RECEIVE_USERS:             
            return Object.assign({}, state, action.users);
        case RECEIVE_USER:             
            return Object.assign({}, state, {[action.user.id]: action.user});
        default:
            return state;
    }
};

