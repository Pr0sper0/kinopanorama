import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <nav id="main-nav">
                <div className="container">
                    <img
                        src="img/Kinopanorama_logo_light.png"
                        alt="NewsGrid"
                        className="logo"
                    />
                    <div className="social">
                        <a href="http://facebook.com"
                        ><i className="fab fa-facebook fa-2x"></i
                        ></a>
                        <a href="http://twitter.com"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="http://instagram.com"
                        ><i className="fab fa-instagram fa-2x"></i
                        ></a>
                        <a href="http://youtube.com"><i className="fab fa-youtube fa-2x"></i></a>
                    </div>
                    <ul>
                        <li><Link to='/' className="current">Home</Link></li>
                        <li><Link to='/movies'>Movies</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
