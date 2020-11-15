import * as PlaylistAPI from '../util/playlist_api_util'

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";

export const receivePlaylists = playlists => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});


export const requestPlaylist = playlistId => dispatch => (
    PlaylistAPI.fetchPlaylist(playlistId).then(songs => {
        dispatch(receiveSongs(songs, playlistId))
    })
)

export const requestPlaylists = userId => dispatch => (
    PlaylistAPI.fetchPlaylists(userId).then(playlists => dispatch(receivePlaylists(playlists)))
)