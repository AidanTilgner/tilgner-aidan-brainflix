import React from 'react';
import './pageHeader.scss';
import Logo from '../../assets/images/Logo-brainflix.svg';
import Upload from '../../assets/images/Icon-upload.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={Logo} alt="logo"/>
            </Link>
            <input className="header__search" type="text" placeholder="Search" />
            <Link to="/upload" className="header__upload-link">
                <button className="header__upload">
                    <img src={Upload} className="header__upload-icon" alt="upload-button"/>
                    UPLOAD
                </button>
            </Link>
            
            <div className="header__profile-pic"></div>
        </header>
    )
}

export default Header;
