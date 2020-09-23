import * as sessionAPI from '../util/session_api_util';

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


export const loginUser = user => ({
    type: LOGIN_USER,
    user
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});

export const receiveSessionErrors = errors => {
    
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors
});
}
export const signup = user => dispatch => (
    sessionAPI.signup(user)
        .then(user => dispatch(loginUser(user)),
        err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const login = user => dispatch => {
    
    return (
    sessionAPI.login(user).then(user => dispatch(loginUser(user)
        ), err => dispatch(receiveSessionErrors(err.responseJSON))
    ));
}

export const logout = () => dispatch => (
    sessionAPI.logout()
        .then(() => dispatch(logoutUser()))
);



