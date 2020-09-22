import { $CombinedState } from "redux"

import {LOGIN_USER, LOGOUT_USER} from '../actions/session_actions';

export default (state = {id: null}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGIN_USER:
            return {id: action.user.id};
        case LOGOUT_USER:
            return {id: null};
        default:
            return state;
    }
};

