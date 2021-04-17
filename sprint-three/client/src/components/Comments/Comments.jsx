import React from 'react';
import './comments.scss';
import Comment from '../Comment/Comment';

function Comments (props){
    return (
        <div className="comments">
            <h2 className="comments__title">{props.comments.length} Comments</h2>
            <div className="comments__form-container">
                <div className="comments__profile-pic"></div>
                <form className="comments__form">
                    <label className="comments__label">JOIN THE CONVERSATION</label>
                    <textarea className="comments__textarea" placeholder="Write comment here"/>
                    <button className="comments__submit">COMMENT</button>
                </form>
            </div>
            
            {props.comments.map((el, key) => (
                <Comment key={key}
                    author={el.name}
                    timestamp={el.timestamp}
                    comment={el.comment}
                />
            ))}
        </div>
    )
}

export default Comments;