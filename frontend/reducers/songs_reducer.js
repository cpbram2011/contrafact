import {RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG } from '../actions/song_actions';

export default (state = {all: {}, recent: {}}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SONGS:
            newState[action.cat] = action.songs
            return newState;
            
        case REMOVE_SONG:
            delete newState.all[action.songId]
            return newState;
        case RECEIVE_SONG:
            newState['all'] = Object.assign({}, newState['all'], action.song)
            return newState;
        default:
            return state;
    }
};

