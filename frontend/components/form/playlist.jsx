import React from 'react';

export default class PlaylistForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            title: ''
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle (e) {
        this.setState({title: e.target.value})
        console.log(this.state.title)
    }

    handleSubmit (e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('playlist[title]', this.state.title)
        formData.append('playlist[author_id]', this.props.currentUser)
        this.props.createPlaylist(formData)
        this.props.closeModal()
    }
    render () {
        return (
            <div className="playlist-form">
                <h1>Create New Playlist</h1>
                <input onChange={this.updateTitle} className='title-input' type="text"/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}