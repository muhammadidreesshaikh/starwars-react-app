import React from 'react';
import '../assets/css/header.css';
import logo from '../assets/img/logo.png';

function Header() {
    return(
        <div>
            <div className="header">
                <img src={logo} />
                Header
            </div>
        </div>
    );
}
export default Header;