import * as PlaylistAPI from '../util/playlist_api_util'
import {receiveSongs, RECEIVE_SONGS} from './song_actions';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";


export const removePlaylist = playlist => ({
    type: REMOVE_PLAYLIST,
    playlist
});

export const receivePlaylists = playlists => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});

export const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist
})


export const requestPlaylist = playlistId => dispatch => (
    PlaylistAPI.fetchPlaylist(playlistId).then(songs => {
        dispatch(receiveSongs(songs, playlistId))
    })
)

export const requestPlaylists = userId => dispatch => (
    PlaylistAPI.fetchPlaylists(userId).then(playlists => dispatch(receivePlaylists(playlists)))
)

export const createPlaylist = playlist => dispatch => (
    PlaylistAPI.createPlaylist(playlist).then(playlist => receivePlaylist(playlist))
);

export const deletePlaylist = playlist_id => dispatch => (
    PlaylistAPI.deletePlaylist(playlist_id).then(playlist => dispatch(removePlaylist(playlist)))
);


