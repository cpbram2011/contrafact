import {RECEIVE_PLAYLISTS} from '../actions/playlist_actions'


export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return Object.assign({}, state, action.playlists)
    
        default:
            return state
    }
};
