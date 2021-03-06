import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import playlistsReducer from './playlists_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    users: usersReducer,
    songs: songsReducer,
    playlists: playlistsReducer
});

