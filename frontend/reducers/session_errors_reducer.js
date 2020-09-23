import {RECEIVE_SESSION_ERRORS, LOGIN_USER} from '../actions/session_actions';


export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case LOGIN_USER:
            return [];
        case RECEIVE_SESSION_ERRORS: 
            return action.errors;
    
        default:
            return state;
    }
};

