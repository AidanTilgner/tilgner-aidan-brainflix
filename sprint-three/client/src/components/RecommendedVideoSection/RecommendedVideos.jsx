import React from 'react';
import { Link } from 'react-router-dom';
import './recommendedVideos.scss';

function RecommendedVideos (props) {
    return (
        <div className="rec-vids">
            <h3 className="rec-vids__title">NEXT VIDEO</h3>
            {props.videos.map((el, index) => (
                <Link to={`/videos/${el.id}`} className="rec-vids__link" key={index}>
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

export default RecommendedVideos