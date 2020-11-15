
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

