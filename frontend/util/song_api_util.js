export const fetchSongs = () => (
    $.ajax({
        url: "/api/songs"
    })
);

