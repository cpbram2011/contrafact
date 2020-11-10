export const fetchSongs = () => (
    $.ajax({
        url: "/api/songs"
    })
);

export const fetchRecent = () => (
    $.ajax({
        url: "/api/songs/recent"
    })
);

export const fetchSong = id => (
    $.ajax({
        url: `/api/songs/${id}`
        
    })
);

export const createSong = song => (

    $.ajax({
        url: 'api/songs',
        method: "POST",
        data: song,
        contentType: false,
        processData: false
    })
);

export const deleteSong = songId => (

    $.ajax({
        url: `api/songs/${songId}`,
        method: "DELETE",
    })
);



