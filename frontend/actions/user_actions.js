import * as UserAPI from '../util/users_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = users => {
    return ({
    type: RECEIVE_USERS,
    users
})};

export const requestUsers = () => dispatch => {
    return UserAPI.fetchUsers().then(users => {
        dispatch(receiveUsers(users))});
}