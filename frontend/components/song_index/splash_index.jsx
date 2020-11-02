import React from 'react';


export default class SplashIndex extends React.Component {


    componentDidMount () {
        this.props.requestSongs()
    }
    render () {
        return (
            <div className='splash-index'>
                
                {this.props.songs.map(song => {
                    
                    return <img src={song.cover} className={`cover-tile`}/>
                })}
            </div>
        )
    }
}