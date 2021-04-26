import React from 'react';

function Comment(props) {
    let getDateFromMiliseconds = (milli) => {
        let date = new Date(milli);
        let month = date.getMonth();
        let day = date.getDate();
        let year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }

    return (
        <div className="comments__comment-container">
            <div className="comments__anon-profile-pic"></div>
            <div className="comments__comment-text">
                <p className="comments__author">{props.author}</p>
                <p className="comments__timestamp">{getDateFromMiliseconds(props.timestamp)}</p>
                <p className="comments__comment">{props.comment}</p>
            </div>
        </div>
    )
}

export default Comment
