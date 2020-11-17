
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

export const deletePlaylist = playlistId => (
    $.ajax({
        url: `api/playlists/${playlistId}`,
        method: "DELETE"
    })
)

export const addToPlaylist = (playlist, song) => (
    $.ajax({
        url: `api/playlists/${playlist}/add`,
        method: "POST",
        data: song,
        contentType: false,
        processData: false
    })
);

export const fetchName = playlistId => (
    $.ajax({
        url: `api/playlists/${playlistId}/name`
    })
);