import './App.scss';
import React from 'react';
import axios from 'axios';
import Header from './components/PageHeader/PageHeader';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Comments from './components/Comments/Comments';
import RecommendedVideos from './components/RecommendedVideo/RecommendedVideos';
import VideoDescription from './components/VideoDescription/VideoDescription';
import Upload from './components/Upload/Upload';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import VideoDetails from './data/video-details.json';
import RecommendedVideoDetails from './data/videos.json';

export const API_KEY = '887145e7-6724-4202-8661-ad41a59b3991';
const VIDEOS_URL = `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`

class App extends React.Component {

    render(){
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Header/>
                            <VideoPlayer/>
                            <div className="app-ui">
                                <VideoDescription/>
                                <Comments/>
                                <RecommendedVideos/>
                            </div>
                        </Route>
                        <Route path="/upload" exact
                            component={Upload}
                        />
                        <Route 
                            path="/:id" exact
                            children={routerProps => (
                                <div>
                                    <Header/>
                                    <VideoPlayer
                                        {...routerProps}
                                    />
                                    <div className="app-ui">
                                        <VideoDescription 
                                            {...routerProps}
                                        />
                                        <Comments 
                                            {...routerProps}
                                        />
                                        <RecommendedVideos
                                            {...routerProps}
                                        />
                                    </div>
                                </div>
                            )}/>
                    </Switch>
                </Router>
            </div>
        );
    }
    
}

export default App;
