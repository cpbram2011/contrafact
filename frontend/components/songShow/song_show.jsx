import React from 'react';
import { FaPlayCircle, FaHeart, FaRetweet, FaShare, FaBars, FaEllipsisH, FaPlay } from 'react-icons/fa';
export default class SongShow extends React.Component {


    componentDidMount () {

        this.props.requestSong(this.props.id)
    }
    render () {
        const song = this.props.songs[this.props.id]
        if (Object.keys(this.props.songs).length === 0 ) return null;
        return (
            <div className="song-show">
                <div className="song-info">
                <div className="song-info-left">
                <FaPlayCircle className='play-button' />
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
                        <button>
                            <FaEllipsisH />
                            <hr/> <hr/>
                            More
                        </button>
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