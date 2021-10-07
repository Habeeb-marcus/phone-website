import React, {useState}from 'react'
import { NavLink } from 'react-router-dom';
import logo from './../../images/logo.svg'
import './Navbar.css';
// import { Link } from 'react-router';


function Navbar() {
const [Navbar, setNavbar] = useState(false)
const [Clicked, setClicked] = useState(false)

const toggleBar = () => {
    if(!Clicked){
        setClicked(true)
    } else {
        setClicked(false)
    }
}


const changeNav = () => {
if( window.scrollY >= 200) {
    setNavbar(true)
} else {
    setNavbar(false)
}
}
    window.addEventListener("scroll", changeNav)

    return (
        <div className={Navbar ? "nav-cont show" : "nav-cont"}>
            <nav className="nav">
                <div className="logo-cont">
                    <img src={logo} alt="we buy phones"/>
                </div>

                <div className="menu-mobile">
                    <i className={Clicked ? "fas fa-times" : "fas fa-bars"} onClick={toggleBar}></i>
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