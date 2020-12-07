import React from 'react';
import {createComment} from '../../util/song_api_util'
import { FaPlayCircle, FaHeart, FaRetweet, FaShare, FaBars, FaEllipsisH, FaPlay } from 'react-icons/fa';
export default class SongShow extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dropdown: false,
            comment: ''
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
    }

    handleSubmit () {
        return e => {
            e.preventDefault()
            let formData = new FormData();
            formData.append('comment[body]', this.state.comment)
            formData.append('comment[author]', this.props.currentUserName)
            formData.append('comment[song_id]', this.props.id)
            createComment(formData).then(res => this.props.requestSong(this.props.id))
        }
    }

    updateComment () {
        return e => {
            
            this.setState({comment: e.target.value})
        }
    }

    render () {
        const song = this.props.songs[this.props.id]
        let comments;
        if (song) comments = Object.values(song.comments).map((comment, i) => {
           
            return(
                <li className={`comment-${i}`}>
                    {comment.author}
                    {comment.body}
                </li>
            )
        })

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
                <img src={song.cover} alt="" />
                </div>


                <div className="comment-section">
                    <div className="comment-container">
                    <p className='user-pic'></p>
                    <form onSubmit={this.handleSubmit()}>

                    <input onChange={this.updateComment()} type="text" class='comment-box' placeholder='Write a comment'/>
                    </form>
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
                            onClick={ () => {this.props.openModal('addSong', song.id) }}
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
                    <div className="comment-container">
                        {comments}
                    </div>

                </div>
            </div>
        )
    }
}