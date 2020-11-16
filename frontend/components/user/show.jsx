import React from 'react';
import SongItem from '../songitem/item';
import {Link} from 'react-router-dom';
export default class UserShow extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            tab: 'playlists'
        };
    }

    componentDidMount() {
        this.props.requestUser(this.props.id)
        this.props.requestPlaylists(this.props.id)
        this.props.requestUploaderSongs(this.props.id)
    }

    updateTab(tab) {
        this.setState({tab: tab})
    }

    render () {
        const user = this.props.users[this.props.id];
        if (!user) return null;
        let tab;
        if (this.state.tab === 'playlists') {
                tab = Object.values(this.props.playlists).map(playlist => {
                    if (playlist.author_id != this.props.id) return null;
                    let songs = playlist.songs.map((song, i) => (
                        <SongItem song={song} index={i} />
                    ))
                    return (
                        <div className={`playlist-${playlist.id}`}>
                            <Link to={`/playlist/${playlist.id}`} >
                            <h2>{playlist.title}</h2>
                            </Link>
                                {songs.length === 0 ? (
                                    <p className='playlist-empty'>empty</p>
                                ) : songs}
                        </div>
                    )
                });
            if (tab.length === 0) tab = (
                <div className='empty'>
                <img src="https://contrafact-seeds.s3.us-east-2.amazonaws.com/emptytab.PNG" alt="" srcset=""/>
                <h3>It's a bit quiet over here</h3>
                <h4>This user has no playlists</h4>
                </div>
            )

            
        } else if (this.state.tab === 'tracks') {
            
            if (Object.values(this.props.songs).length === 0 ) {tab = (
                <div className='empty'>
                <img src="https://contrafact-seeds.s3.us-east-2.amazonaws.com/emptytab.PNG" alt="" srcset=""/>
                <h3>It's a bit quiet over here</h3>
                <h4>This user has no uploaded tracks</h4>
                </div>
            )} else {
                tab = Object.values(this.props.songs).map((song, i) => {
                    return (
                        <SongItem index={i} song={song} />
                    )
                });

            }
        } else {
            tab = (
                <div className='empty'>
                <img src="https://contrafact-seeds.s3.us-east-2.amazonaws.com/emptytab.PNG" alt="" srcset=""/>
                <h3>It's a bit quiet over here</h3>
                <h4>Album functionality coming soon!</h4>
                </div>
            )
        }
        return (
            <div className="user-show">
                <div className="user-deets">
                <div>
                <h3>{user.email}</h3>
                <h1>{user.username}</h1>

                </div>

                <p className="prof-pic"></p>
                </div>
                <div className="tab-bar">
                    <t className={this.state.tab === 'playlists' ? 'selected' : null} onClick={() => this.updateTab('playlists')}>Playlists</t>
                    <t className={this.state.tab === 'tracks' ? 'selected' : null} onClick={() => this.updateTab('tracks')}>Tracks</t>
                    <t className={this.state.tab === 'albums' ? 'selected' : null} onClick={() => this.updateTab('albums')}>Albums</t>

                </div>
                <div className="tab">
                {tab}
                    
                </div>
            </div>
        )
    }
}
