import './App.scss';
import React from 'react';
import Header from './components/header/Header';
import Video from './components/video/Video';
import Comments from './components/comments/Comments';
import RecommendedVideos from './components/recommendedVideos/RecommendedVideos';
import VideoDetails from './data/video-details.json';
import RecommendedVideoDetails from './data/videos.json';
import VideoDescription from './components/videoDescription/VideoDescription'

class App extends React.Component {
    constructor(props){
        super(props);

        this.updateVideo = this.updateVideo.bind(this);

        this.state = {
            selectedVideo: VideoDetails[0],
            recVideos: RecommendedVideoDetails,
            dontDisplay: 0,
        }
    }

    updateVideo(selected){
        let index = VideoDetails.findIndex(el => el.id === selected);
        this.setState({
            selectedVideo: VideoDetails[index],
            dontDisplay: index,
        })
    }

    render(){
        return (
            <div className="App">
                <Header/>
                <Video 
                    imageSource={this.state.selectedVideo.image} 
                />
                <div className="app-ui">
                    <VideoDescription 
                        title={this.state.selectedVideo.title} 
                        channel={this.state.selectedVideo.channel}
                        timestamp={this.state.selectedVideo.timestamp}
                        views={this.state.selectedVideo.views}
                        likes={this.state.selectedVideo.likes}
                        description={this.state.selectedVideo.description}
                    />
                    <Comments 
                        comments={this.state.selectedVideo.comments}
                    />
                    <RecommendedVideos
                        videos={this.state.recVideos}
                        dontDisplay={this.state.dontDisplay}
                        updateVideo={this.updateVideo}
                    />
                </div>
            </div>
        );
    }
    
}

export default App;
