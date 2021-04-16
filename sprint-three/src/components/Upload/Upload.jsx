import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import Thumbnail from '../../assets/images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';
import './upload.scss'

class Upload extends React.Component {
    state = {
        email: ''
    }

    render(){
        return (
            <div>
                <PageHeader />
                <div className="upload">
                    <h1 className="upload__title">Upload Video</h1>
                    <div className="upload__video-info">
                        <h4 className="upload__thumbnail-label">VIDEO THUMBNAIL</h4>
                        <img src={Thumbnail} alt="" className="upload__video-thumbnail"/>
                        <div className="upload__form">
                            <label htmlFor="title" className="upload__form-label">TITLE YOUR VIDEO</label>
                            <input type="text" name="title" id="title" className="upload__input" placeholder="Add a title to your video"/>
                            <label htmlFor="description" className="upload__form-label">ADD A VIDEO DESCRIPTION</label>
                            <textarea type="text" name="description" id="description" className="upload__text-area" placeholder="Add a description of your video"/>
                        </div>
                    </div>
                    <div className="upload__form-buttons">
                        <button className="upload__submit" onClick={ (e) => {
                            e.preventDefault();
                            alert('Video Published');
                            this.props.history.push('/');
                        }}>PUBLISH</button>
                        <Link to="/" className="upload__cancel">CANCEL</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Upload
