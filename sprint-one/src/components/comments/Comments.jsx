import React, { Component } from 'react';
import './comments.scss';
import Comment from './components/Comment'

function Comments (props){
    let commentsInfo = [...props.comments];

    return (
        <div className="comments">
            <h2 className="comments__title">{commentsInfo.length} Comments</h2>
            <div className="comments__form-container">
                <div className="comments__profile-pic"></div>
                <form className="comments__form">
                    <label className="comments__label">JOIN THE CONVERSATION</label>
                    <textarea className="comments__textarea" placeholder="Write comment here"/>
                    <button className="comments__submit">COMMENT</button>
                </form>
            </div>
            
            {commentsInfo.map((el, key) => (
                <Comment
                    author={el.name}
                    timestamp={el.timestamp}
                    comment={el.comment}
                />
            ))}
        </div>
    )
}

export default Comments;