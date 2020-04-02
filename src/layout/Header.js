import React from 'react';
import '../assets/css/header.css';
import logo from '../assets/img/logo.png';

function Header() {
    return(
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className='logo'>
                                <img src={logo} />
                            </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    <li><a href="#">Planets</a></li>
                                    <li><a href="#">Spaceships</a></li>
                                    <li><a href="#">Vehicles</a></li>
                                    <li><a href="#">People</a></li>
                                    <li><a href="#">Films</a></li>
                                    <li><a href="#">Species</a></li>
                                 </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;