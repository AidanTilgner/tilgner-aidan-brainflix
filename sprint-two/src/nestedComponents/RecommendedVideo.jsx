import React from 'react'

function RecommendedVideo(props) {
    return (
        <div className="rec-vids__rec-vid" onClick={props.updateVideo}>
            <img src={props.imageSource} alt="" className="rec-vids__vid-thumbnail"/>
            <h3 className="rec-vids__vid-title">{props.title}</h3>
            <h3 className="rec-vids__vid-channel">{props.channel}</h3>
        </div>
    )
}

export default RecommendedVideo
