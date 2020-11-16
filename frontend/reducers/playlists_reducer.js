import {RECEIVE_PLAYLISTS, REMOVE_PLAYLIST} from '../actions/playlist_actions'


export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return Object.assign({}, state, action.playlists)
    
        case REMOVE_PLAYLIST:
            let newState = Object.assign({}, state);
            delete newState[action.playlist.id]
            return newState
        default:
            return state
    }
};
