import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from './../../images/logo.svg'
import './Navbar.css';
// import { Link } from 'react-router';


function Navbar() {
    return (
        <div className="nav-cont">
            <nav className="nav">
                <div className="logo-cont">
                    <img src={logo} alt="we buy phones"/>
                </div>

                <div className="nav-list">
                    <ul className="nav-ul">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">How it works</NavLink></li>
                        <li><NavLink to="/reviews">Reviews</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                        <li ><NavLink to="/start" className="start">Get started</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Navbar