import React from 'react';
import axios from 'axios';
import PageHeader from '../PageHeader/PageHeader';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Comments from '../Comments/Comments';
import RecommendedVideos from '../RecommendedVideoSection/RecommendedVideos';
import VideoDescription from '../VideoDescription/VideoDescription';

//default ?api_key=887145e7-6724-4202-8661-ad41a59b3991
const API_KEY = '';
//default https://project-2-api.herokuapp.com
const API_URL = 'http://localhost:8080';

class Page extends React.Component{
    id = this.props.match ? this.props.match.params.id : '1af0jruup5gu';

    state = {
        id: this.id,
        selectedVideo: {
            comments: [],
        },
        videos: [],
    }

    filterVideos = (mainID, videos) => {
        return videos.filter(video => video.id !== mainID);
    }

    componentDidMount = () => {
        //get main video object here
        axios.get(`${API_URL}/videos/${this.state.id}${API_KEY}`)
        .then(res => {
            this.setState({
                selectedVideo: res.data, //get video info here
            })
        })
        .catch(err => {
            console.error(err)
        })

        //get recommended video objects here
        axios.get(`${API_URL}/videos${API_KEY}`)
        .then(res => {
            console.log(res)
            this.setState({
                videos: this.filterVideos(this.state.id, res.data), //get recommended video details here
            })
        })
        .catch(err => {
            console.error(err)
        })
    }

    componentDidUpdate = () => {
        let newID = this.props.match ? this.props.match.params.id : '1af0jruup5gu';

        if(newID !== this.state.id){
            this.setState({
                id: newID,
            })
            //get main video object here
            axios.get(`${API_URL}/videos/${newID}${API_KEY}`)
            .then(res => {
                this.setState({
                    selectedVideo: res.data,
                })
            })
            .catch(err => {
                console.error(err)
            })

            //get recommended video objects here
            axios.get(`${API_URL}/videos${API_KEY}`)
            .then(res => {
                this.setState({
                    videos: this.filterVideos(newID, res.data),
                })
            })
            .catch(err => {
                console.error(err)
            })
        }
    }

    render(){
        return(
            <>
                <PageHeader/>
                <VideoPlayer image={this.state.selectedVideo.image}/>
                <div className="app-ui">
                    <VideoDescription 
                        title={this.state.selectedVideo.title}
                        channel={this.state.selectedVideo.channel}
                        timestamp={this.state.selectedVideo.timestamp}
                        views={this.state.selectedVideo.views}
                        likes={this.state.selectedVideo.likes}
                    />
                    <Comments comments={this.state.selectedVideo.comments}/>
                    <RecommendedVideos videos={this.state.videos}/>
                </div>
            </>
        )
    }
}

export default Page;