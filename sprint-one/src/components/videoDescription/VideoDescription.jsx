import React from 'react';
import viewsIcon from '../../assets/images/Icon-views.svg';
import likesIcon from '../../assets/images/Icon-likes.svg';
import './videoDescription.scss'

function VideoDescription(props) {
    return (
        <div className="video-description">
            <h2 className="video-description__title">{props.title}</h2>
            <div className="video-description__info">
                <p className="video-description__channel">By {props.channel}</p>
                <p className="video-description__timestamp">{props.timestamp}</p>
                <p className="video-description__views"><img src={viewsIcon} alt="" className="video__info-icon"/> {props.views}</p>
                <p className="video-description__likes"><img src={likesIcon} alt="" className="video__info-icon"/>{props.likes}</p>
            </div>
            <p className="video-description__description">
                {props.description}
            </p>
        </div>
    )
}

export default VideoDescription
