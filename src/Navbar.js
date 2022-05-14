import React, { useState } from 'react'
import './css/Navbar.css'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
// import Home from './Home'


const Navbar = (props) => {
    const [showMediaIcons, setShowMediaIcons] =useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo start */}
                <div className="logo">
                    <h2>
                        <span>R</span>ed
                        <span>C</span>ross
                    </h2>
                </div>
                {/* 2nd part */}
                <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link" }>
                    <ul>
                        <li>
                            <NavLink to="/">home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                {/* 3rd social media link */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="www.facebook.com" target="_blank">
                                <FaFacebookSquare className='facebook' />
                            </a>
                        </li>

                        <li>
                            <a href="www.instagram.com" target="_blank">
                                <FaInstagramSquare className='instagram'/>
                            </a>
                        </li>

                        <li>
                            <a href="www.youtube.com" target="_blank">
                                <FaYoutubeSquare className='youtube'/>
                            </a>
                        </li>
                    </ul>
                    {/* Hamburger Menu */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={ () => setShowMediaIcons(!showMediaIcons) }>
                        <GiHamburgerMenu />
                        </a>
                    </div>

                </div>
            </nav>

        {/* Hero section STARt */}

  
        </>
    )
}

export default Navbar
