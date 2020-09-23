import {LOGIN_USER} from '../actions/session_actions';


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, {[action.user.id]: action.user});
    
        default:
            return state;
    }
};

