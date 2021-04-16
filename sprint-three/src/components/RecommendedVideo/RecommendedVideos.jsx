import React from 'react';
import RecommendedVideo from '../../nestedComponents/RecommendedVideo';
import { Link } from 'react-router-dom';
import './recommendedVideos.scss';
import axios from 'axios';
import { API_KEY } from '../../App'

class RecommendedVideos extends React.Component {
    id = this.props.match ? this.props.match.params.id : '1af0jruup5gu';

    state={
        id: this.id,
        videos: []
    }

    filterVideos = (num, videos) => {
        return videos.filter(video => videos.indexOf(video) !== num);
    }

    componentDidMount = () => {
        axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`)
        .then(res => {
            this.setState({
                videos: res.data
            })
        })
        .catch(err => {
            console.error(err)
        })
    }

    componentDidUpdate = () => {
        let newId = this.props.match ? this.props.match.params.id : '1af0jruup5gu';

        axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`)
        .then(res => {
            this.setState({
                id: newId,
                videos: res.data
            })
        })
        .catch(err => {
            console.error(err)
        })
    }
    
    render(){
    return (
        <div className="rec-vids">
            <h3 className="rec-vids__title">NEXT VIDEO</h3>
            {this.state.videos.filter(video => video.id !== this.state.id).map((el, index) => (
                <Link to={`/${el.id}`} className="rec-vids__link">
                <div className="rec-vids__rec-vid" key={index}>
                    <img src={el.image} alt="" className="rec-vids__vid-thumbnail"/>
                    <h3 className="rec-vids__vid-title">{el.title}</h3>
                    <h3 className="rec-vids__vid-channel">{el.channel}</h3>
                </div>
                </Link>
            ))}
        </div>
    )
    }
}

export default RecommendedVideos