import React from 'react';
import viewsIcon from '../../assets/images/Icon-views.svg';
import likesIcon from '../../assets/images/Icon-likes.svg';
import './videoDescription.scss';
import axios from 'axios';
import { API_KEY } from '../../App'

class VideoDescription extends React.Component {
    id = this.props.match ? this.props.match.params.id : '1af0jruup5gu';

    state={
        id: this.id,
        title: null,
        channel: null,
        timestamp: null,
        views: null,
        likes: null
    }

    componentDidMount = () => {
        axios.get(`https://project-2-api.herokuapp.com/videos/${this.state.id}?api_key=${API_KEY}`)
        .then(res => {
            this.setState({
                title: res.data.title,
                channel: res.data.channel,
                timestamp: res.data.timestamp,
                views: res.data.views,
                likes: res.data.likes
            })
        })
        .catch(err => {
            console.error(err)
        })
    }

    componentDidUpdate = () => {
        let id = this.props.match ? this.props.match.params.id : '1af0jruup5gu'
        axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`)
        .then(res => {
            this.setState({
                title: res.data.title,
                channel: res.data.channel,
                timestamp: res.data.timestamp,
                views: res.data.views,
                likes: res.data.likes
            })
        })
        .catch(err => {
            console.error(err)
        })
    }

    getDateFromMiliseconds = (milli) => {
        let date = new Date(milli);
        let month = date.getMonth();
        let day = date.getDate();
        let year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }

    render(){
        return (
            <div className="video-description">
                <h2 className="video-description__title">{this.state.title}</h2>
                <div className="video-description__info">
                    <p className="video-description__channel">By {this.state.channel}</p>
                    <p className="video-description__timestamp">{this.getDateFromMiliseconds(this.state.timestamp)}</p>
                    <p className="video-description__views"><img src={viewsIcon} alt="" className="video__info-icon"/> {this.state.views}</p>
                    <p className="video-description__likes"><img src={likesIcon} alt="" className="video__info-icon"/>{this.state.likes}</p>
                </div>
                <p className="video-description__description">
                    {this.state.description}
                </p>
            </div>
        )
    }
}

export default VideoDescription
