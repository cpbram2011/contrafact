import React from 'react';
import { FaPlayCircle, FaHeart, FaRetweet, FaShare, FaBars, FaEllipsisH, FaPlay } from 'react-icons/fa';
export default class SongShow extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dropdown: false
        };

        this.handleDropdown = this.handleDropdown.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)

    }

    componentDidMount () {

        this.props.requestSong(this.props.id)
    }

    handleDropdown (e) {
        e.preventDefault()
        this.setState({dropdown: !this.state.dropdown})
    }

    closeDropdown (e) {
        e.preventDefault()
        this.setState({dropdown: false})
        console.log('blurgh')
    }

    render () {
        const song = this.props.songs[this.props.id]
        if (Object.keys(this.props.songs).length === 0 ) return null;
        return (
            <div className="song-show">
                <div className="song-info">
                <div className="song-info-left">
                <FaPlayCircle className='play-button'
                onClick={() => this.props.receiveCurrentSong(this.props.id)}
                />
                <h3>{song.artist}</h3>
                <h1>{song.title}</h1>

                </div>
                <img src={song.cover} alt="" srcset=""/>
                </div>


                <div className="comment-section">
                    <div className="comment-container">
                    <p className='user-pic'></p>
                    <input type="text" class='comment-box' placeholder='Write a comment'/>
                    </div>
                    <div className="comment-buttons">
                        <button>
                            <FaHeart />
                            <hr/>
                            
                            Like
                        </button>
                        <button>
                            <FaRetweet />
                            <hr/> <hr/>
                            Repost
                        </button>
                        <button>
                            <FaShare />
                            <hr/> <hr/>
                            Share
                        </button>
                        <button>
                            <FaBars />
                            <hr/> <hr/>
                            Add to Next up
                        </button>
                        <div className="dropdown-parent"
                            
                            >

                        <button
                        className='more'
                        onMouseEnter={this.handleDropdown}>
                            <FaEllipsisH />
                            <hr/> <hr/>
                            More
                        </button>
                        {this.state.dropdown ? (
                        <div className="dropdown-child">
                            <p
                            onClick={ () => {this.props.openModal('addSong') }}
                            >Add to playlist</p>


                            {this.props.currentUser === song.uploader_id ? (
                                <p
                                onClick={() => {
                                this.props.history.push("/home")
                                this.props.deleteSong(song.id)}}
                                >Delete Song</p>
                                ) : null
                            }

                        </div>
                        ) : null}
                        </div>

                        <div className="stats">
                        <li>
                        <FaPlay /> 437
                        </li>
                        <li>
                        <FaHeart /> 212
                        </li>
                        <li>
                        <FaShare /> 189
                        </li>
                        </div>
                    </div>
                    

                </div>
            </div>
        )
    }
}