
import React from 'react';


export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            track: null,
            cover: null,
            
        }

        this.updateMp3 = this.updateMp3.bind(this)
        this.updateCover = this.updateCover.bind(this)
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
            e.preventDefault();
            this.setState({track: e.target.files[0]})
        
            
        }
    }

    updateCover () {
        return e => {
            e.preventDefault()
            this.setState({cover: e.target.files[0]})
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
        if (!this.state.cover) {
            // const fileReader = new FileReader();
            // fileReader.readAsDataURL("https://contrafact-seeds.s3.us-east-2.amazonaws.com/cover_plaeholder.png");
            // fileReader.onloadend = () => {
            //     formData.append('song[cover]', fileReader.result)
            // };
            let cover = new File(['cover'], "https://contrafact-seeds.s3.us-east-2.amazonaws.com/cover_plaeholder.png")
            
            formData.append('song[cover]', cover)
        } else {
            formData.append('song[cover]', this.state.cover)
            
        }
        this.props.createSong(formData)
        this.props.closeModal()
    }


    render () {
        return (
            <div className='form-box'>
                <h1>Upload Song</h1>

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

                <input type="file"
                onChange={this.updateCover(this)}
                accept="image/*"
                />

                <button onClick={this.handleSubmit}>Submit</button>
            </div>

        )
    }






}