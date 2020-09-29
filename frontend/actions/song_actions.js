import * as SongAPI from '../util/song_api_util';


export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";

export const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
});

export const receiveCurrentSong = song => ({
    type: RECEIVE_CURRENT_SONG,
    song
});

export const requestSongs = () => dispatch => (
    SongAPI.fetchSongs().then(songs => dispatch(receiveSongs(songs)))
);

export const requestCurrentSong = songId => dispatch => (
    SongAPI.fetchSong(songId).then(
        
        song => dispatch(receiveCurrentSong(song)))
)



