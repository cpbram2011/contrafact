
import React from 'react';


export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            track: null,
            cover: ''
        }

        this.updateMp3 = this.updateMp3.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }


    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
            console.log(this.state)
        }
    }
    
    updateMp3 () {
        return e => {
            this.setState({track: e.target.files[0]})
            
        }
    }

    handleSubmit (e) {
        e.preventDefault()
        
        const formData = new FormData();
        formData.append('song[title]', this.state.title)
        formData.append('song[artist]', this.state.artist)
        if (this.state.track) {
            formData.append('song[track]', this.state.track)
        } 
        if (this.state.cover) {
            formData.append('song[cover]', this.state.cover)
        }

        $.ajax({
            url: 'api/songs',
            method: "POST",
            data: formData,
            contentType: false,
            processData: false
        }).then(
            x => console.log(x),
            x => console.log(x)
        );
    }


    render () {
        return (
            <div className='form-box'>
                <h1>Do now submit yet!</h1>

                <input type="text" 
                value= {this.props.title}
                onChange={this.update('title')}            
                placeholder="Track Title"
                onChange={this.update('title')}
                />

                <input type="text" 
                value= {this.props.artist}
                onChange={this.update('artist')}           
                placeholder="Artist"
                onChange={this.update('artist')}
                />

                <input type="file"
                onChange={this.updateMp3(this)}
                accept="audio/mpeg"
                />

                <button onClick={this.handleSubmit}>Submit</button>
            </div>

        )
    }






}