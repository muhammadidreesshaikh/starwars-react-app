import React from 'react';
import { Link } from 'react-router-dom';
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
                                    <li>
                                        <Link to="/planets">Planets</Link>
                                    </li>
                                    <li>
                                        <Link to="/spaceships">Spaceships</Link>
                                    </li>
                                    <li>
                                        <Link to="/vehicles">Vehicles</Link>
                                    </li>
                                    <li>
                                        <Link to="/people">People</Link>
                                    </li>
                                    <li>
                                        <Link to="/films">Films</Link>
                                    </li>
                                    <li>
                                        <Link to="/species">Species</Link>
                                    </li>
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