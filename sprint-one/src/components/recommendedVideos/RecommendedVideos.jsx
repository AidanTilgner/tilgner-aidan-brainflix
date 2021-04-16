import React from 'react';
import RecommendedVideo from './components/RecommendedVideo'
import './recommendedVideos.scss';

class RecommendedVideos extends React.Component {
    constructor(props){
        super(props)

    }
    
    render(){

    return (
        <div className="rec-vids">
            <h3 className="rec-vids__title">NEXT VIDEO</h3>
            {this.props.videos.filter((el, index) => index !== this.props.dontDisplay).map((el, index) => (
                <div className="rec-vids__rec-vid" onClick={() => {this.props.updateVideo(el.id)}}>
                    <img src={el.image} alt="" className="rec-vids__vid-thumbnail"/>
                    <h3 className="rec-vids__vid-title">{el.title}</h3>
                    <h3 className="rec-vids__vid-channel">{el.channel}</h3>
                </div>
            ))}
        </div>
    )
    }
}

export default RecommendedVideos