import React from 'react';
import './video.scss'

function Video(props) {
    return (
        <div className='video'>
            <video className="video__video" poster={props.imageSource} controls></video>
        </div>
    )
}

export default Video;
