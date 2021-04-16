import React, { Component } from 'react';
import './comments.scss';
import Comment from '../../nestedComponents/Comment';
import axios from 'axios';
import { API_KEY } from '../../App'

class Comments extends React.Component{
    id = this.props.match ? this.props.match.params.id : '1af0jruup5gu';

    state = {
        id: this.id,
        comments: [{}, {}, {}],
    }

    componentDidMount = () => {
        axios.get(`https://project-2-api.herokuapp.com/videos/${this.state.id}?api_key=${API_KEY}`)
        .then(res => {
            this.setState({
                comments: res.data.comments
            })
        })
        .catch(err => {
            console.error(err)
        })
        
    }

    componentDidUpdate = () => {
        let id = this.props.match ? this.props.match.params.id : '1af0jruup5gu'
        axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`)
        .then(res => {
            this.setState({
                comments: res.data.comments
            })
        })
        .catch(err => {
            console.error(err)
        })
    }

    render(){
        return (
            <div className="comments">
                <h2 className="comments__title">{this.state.comments.length} Comments</h2>
                <div className="comments__form-container">
                    <div className="comments__profile-pic"></div>
                    <form className="comments__form">
                        <label className="comments__label">JOIN THE CONVERSATION</label>
                        <textarea className="comments__textarea" placeholder="Write comment here"/>
                        <button className="comments__submit">COMMENT</button>
                    </form>
                </div>
                
                {this.state.comments.map((el, key) => (
                    <Comment key={key}
                        author={el.name}
                        timestamp={el.timestamp}
                        comment={el.comment}
                    />
                ))}
            </div>
        )
    }
}

export default Comments;