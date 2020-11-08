export const fetchSongs = () => (
    $.ajax({
        url: "/api/songs"
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



