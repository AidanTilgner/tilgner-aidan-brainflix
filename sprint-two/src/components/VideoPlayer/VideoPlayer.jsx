import React from 'react';
import './videoPlayer.scss';
import axios from 'axios';
import { API_KEY } from '../../App';

class Video extends React.Component {
    id = this.props.match ? this.props.match.params.id : '1af0jruup5gu';

    state={
        id: this.id,
        image: null,
    }

    componentDidMount = () => {
        axios.get(`https://project-2-api.herokuapp.com/videos/${this.state.id}?api_key=${API_KEY}`)
        .then(res => {
            this.setState({
                image: res.data.image
            })
        })
        .catch( err => {
            console.error(err)
        })
    }

    componentDidUpdate = () => {
        let id = this.props.match ? this.props.match.params.id : '1af0jruup5gu';
        axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`)
        .then(res => {
            this.setState({
                image: res.data.image
            })
        })
    }
    
    render(){
        return (
            <div className='video'>
                <video className="video__video" poster={this.state.image} controls></video>
            </div>
        )
    }
}

export default Video;
