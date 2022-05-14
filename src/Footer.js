import React from 'react'
// import { NavLink } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import { ImLocation2 } from "react-icons/im";
import { BiPhone } from "react-icons/bi"
import { FaEnvelope } from "react-icons/fa"
import './css/Footer.css'
const Footer = (props) => {
    return (
        <footer>
            <div className="footer-content">

                <div className="left box">
                    <div className="content">
                        <h2 className="footer-heading"> Social Media</h2>
                        <p className="footer-para">
                            You can contact us on different social media Handle
                        </p>
                        <div className="social">
                            <ul >
                                <li>
                                    <a href="www.facebook.com" target="_blank">
                                        <FaFacebookSquare className='facebook' />
                                    </a>
                                </li>

                                <li>
                                    <a href="www.instagram.com" target="_blank">
                                        <FaInstagramSquare className='instagram' />
                                    </a>
                                </li>

                                <li>
                                    <a href="www.youtube.com" target="_blank">
                                        <FaYoutubeSquare className='youtube' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="center box">
                   
                    <div className="content">
                    <h2 className="footer-heading">Address</h2>
                        <div className="place">
                            <span className="text"> <ImLocation2 /> mohali-punjab.</span>
                        </div>
                        <div className="phone">
                            <span className="text"> <BiPhone /> 0172-2219526</span>
                        </div>

                        <div className="email">
                            <span className="text"> <FaEnvelope /> redcrossmohali@yahoo.com</span>
                        </div>
                    </div>
                </div>


                <div className="right box">
                 
                    <div className="content">
                    <h2 className="footer-heading">Send queries</h2>
                        <form action="#">
                            <div className="email">
                                {/* <div className="text">Email *</div> */}
                                <input type="email" required placeholder='Email' />
                            </div>
                            <div className="msg">
                                {/* <div className="text">Message *</div> */}
                                <textarea name="textareaa" id="text" cols="25" rows="3" placeholder='Write Here...'></textarea>
                            </div>
                            <div className="btn">
                                <button className="send-queries-btn" type="submit">Send </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
