import * as PlaylistAPI from '../util/playlist_api_util'

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";

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
)

