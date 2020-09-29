
import {connect} from 'react-redux'
import Play from './play';


const mSTP = state => ({
    song: state.session.currentSong
})

export default connect(mSTP, null)(Play)