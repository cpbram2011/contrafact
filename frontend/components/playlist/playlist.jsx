import React from 'react';

export default class Playlist extends React.Component {


    componentDidMount(){
        this.props.requestPlaylist(this.props.tag)
    }
    render () {

        if (!this.props.playlist) return null;

        
        let {playlist} = this.props.playlist
        debugger
        //TODO BIG
        return (

            <div className="playlist">
            </div>
        )
    }
}