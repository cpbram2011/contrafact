
import {connect} from 'react-redux'
import Play from './play';


const mSTP = state => {
    // const song = state.en
    return({
    currentSong: state.session.currentSong, // 53
                //: 
    songs: Object.assign({}, state.entities.songs)  //
    
})}

export default connect(mSTP, null)(Play)