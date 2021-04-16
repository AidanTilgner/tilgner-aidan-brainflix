import React from 'react';
import './videoPlayer.scss';

function VideoPlayer(props){
    return (
        <div className='video'>
            <video className="video__video" poster={props.image} controls></video>
        </div>
    )
}

export default VideoPlayer;
