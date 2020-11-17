
import React from 'react';


export default class Form extends React.Component {
    constructor(props) {
        super(props)
        // const cover = new File(['cover'], "https://contrafact-seeds.s3.us-east-2.amazonaws.com/cover_plaeholder.png");
        
        this.state = {
            title: '',
            artist: '',
            track: null,
            cover: null,
            progress: 0,
            errors: []
            
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
            const track = e.target.files[0]
            console.log(track.name.split(".")[0])
            this.setState({title: track.name.split(".")[0]})
            this.setState({track: track})
            this.handleSubmit();
            
        }
    }

    updateCover () {
        return e => {
            e.preventDefault()
            this.setState({cover: e.target.files[0]})
        }
    }

    handleSubmit () {
        if (this.state.progress === 0){
            // if (this.state.track === null){
            //     this.setState({errors: ['Choose an audio file to upload']})
            // } else {
                this.setState({progress: 1, errors: []})
            // }
            return null;
        } 
        if (this.state.artist.length === 0  || this.state.artist.length === 0){
            this.setState({errors: ['More info required']});
            return null;
        }
        
        
        
        const formData = new FormData();
        formData.append('song[title]', this.state.title)
        formData.append('song[artist]', this.state.artist)
        formData.append('song[uploader_id]', this.props.currentUser)
        if (this.state.track) {
            formData.append('song[track]', this.state.track)
        } 
        
        if (!this.state.cover) {
            // TODO why did this stop workingggg??
            let cover = new File(['cover'], "https://contrafact-seeds.s3.us-east-2.amazonaws.com/cover_plaeholder.png")
            formData.append('song[cover]', cover)
        } else {
            formData.append('song[cover]', this.state.cover)
            
        }
        
        this.props.createSong(formData)
        this.props.closeModal()
    }


    render () {
        let formStuff;
        if (this.state.progress === 0) {
            formStuff = 
            <div>

                <label className='cover'>Select audio file

                <input type="file"
                    onChange={this.updateMp3(this)}
                    accept="audio/mpeg"
                    className='track-selector'
                    id='cover'
                    />
                </label>

            </div>
            
        } else {
            
            formStuff = 
            <div>
            <label> Title *
                </label>
            <input type="text" 
            value= {this.state.title}
            onChange={this.update('title')} 
            />

            {/* <img src={this.state.cover.name} alt="" srcset=""/> */}
            <label >Artist *
                
                </label>

            <input type="text" 
            value= {this.state.artist}
            onChange={this.update('artist')}    
            />
            <p>* required fields</p>
            <label  className='cover'>Select cover art
            <input type="file"
            id='cover'
            onChange={this.updateCover(this)}
            accept="image/*"
            />
            </label>

            <button onClick={this.handleSubmit}>Submit</button>

            </div>
        }
        return (
            <div className='form-box'>
                <h1>Upload Song</h1>
                {formStuff}
                {this.state.errors.map(e => {
                    return (
                        <li className="errors">
                            {e}
                        </li>
                    )
                })}
                
            </div>

        )
    }






}