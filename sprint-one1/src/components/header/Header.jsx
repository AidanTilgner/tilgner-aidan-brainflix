import React from 'react';
import './header.scss';
import Logo from '../../assets/images/Logo-brainflix.svg';
import Upload from '../../assets/images/Icon-upload.svg';

function Header() {
    return (
        <header className="header">
            <a href="#">
                <img className="header__logo" src={Logo}/>
            </a>
            <input className="header__search" type="text" placeholder="Search" />
            <button className="header__upload">
                <img src={Upload} className="header__upload-icon"/>
                UPLOAD
            </button>
            <div className="header__profile-pic"></div>
        </header>
    )
}

export default Header;
