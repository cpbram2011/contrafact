import * as SongAPI from '../util/song_api_util';


export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";

export const receiveSongs = (songs, cat) => ({
    type: RECEIVE_SONGS,
    cat,
    songs
});

export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
});

export const removeSong = songId => ({
    type: REMOVE_SONG,
    songId
});

export const receiveCurrentSong = songId => ({
    type: RECEIVE_CURRENT_SONG,
    songId
});

export const requestSongs = () => dispatch => (
    SongAPI.fetchSongs().then(songs => dispatch(receiveSongs(songs, 'all')))
);

export const requestRecent = () => dispatch => (
    SongAPI.fetchRecent().then(songs => dispatch(receiveSongs(songs, 'recent')))
);

export const requestSong = songId => dispatch => (
    SongAPI.fetchSong(songId).then(song => dispatch(receiveSong(song)))
);


export const requestCurrentSong = songId => dispatch => (
    SongAPI.fetchSong(songId).then(
        
        song => dispatch(receiveCurrentSong(song)))
)


export const createSong = song => dispatch => (
    SongAPI.createSong(song).then(song => dispatch(receiveSong(song)))
);


export const deleteSong = songId => dispatch => (
    SongAPI.deleteSong(songId).then(song => {
        dispatch(removeSong(Object.keys(song)[0]))
        }

        )

);
