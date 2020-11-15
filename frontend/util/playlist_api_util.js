
export const fetchPlaylist = playlistId => (
    $.ajax({
        url: `api/playlists/${playlistId}`,
    })
);

  
export const fetchPlaylists = userId => (
    $.ajax({
        url: `/api/users/${userId}/playlists`
    })
);


export const createPlaylist = playlist => (
    $.ajax({
        url: 'api/playlists',
        method: "POST",
        data: playlist,
        contentType: false,
        processData: false
    })
)