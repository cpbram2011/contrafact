import * as SongAPI from '../util/song_api_util';


export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";

export const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
});

export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
});

export const receiveCurrentSong = songId=> ({
    type: RECEIVE_CURRENT_SONG,
    songId
});

export const requestSongs = () => dispatch => (
    SongAPI.fetchSongs().then(songs => dispatch(receiveSongs(songs)))
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
)
