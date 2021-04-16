import React from 'react';

function Comment(props) {
    return (
        <div className="comments__comment-container">
            <div className="comments__anon-profile-pic"></div>
            <div className="comments__comment-text">
                <p className="comments__author">{props.author}</p>
                <p className="comments__timestamp">{props.timestamp}</p>
                <p className="comments__comment">{props.comment}</p>
            </div>
        </div>
    )
}

export default Comment
