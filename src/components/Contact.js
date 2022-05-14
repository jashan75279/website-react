import React from 'react'
import '../css/Contact.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import { ImLocation2 } from "react-icons/im";
import { BiPhone } from "react-icons/bi"
import { FaEnvelope } from "react-icons/fa"
import Map from './components-component/Gmap';
const Contact = (props) => {
    return (
        <>
            {/* <!-- Main Heading for contact forms --> */}
            <div className="contactUs">
                <div className="title">
                    <h2>
                        Get in touch
                    </h2>
                </div>
                <div className="box">
                    {/* <!-- Form  --> */}
                    <div className="contact form">
                        <h3>Send a Message</h3>


                        <form action="" className="formBox">
                            <div className="row50">
                                <div className="inputBox">
                                    <span>First Name</span>
                                    <input type="text" placeholder="Enter first Name" />
                                </div>
                                <div className="inputBox">
                                    <span>Last Name</span>
                                    <input type="text" placeholder="Enter Last Name" />
                                </div>

                            </div>
                            <div className="row50">
                                <div className="inputBox">
                                    <span>Email</span>
                                    <input type="email" placeholder="email" />
                                </div>
                                <div className="inputBox">
                                    <span>Mobile NO.</span>
                                    <input type="NUmber" placeholder="Mobile-no." />
                                </div>

                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <span>Message</span>
                                    <textarea name="textArea" placeholder="Write you's msg here..." id="" cols="10"
                                        rows="5"></textarea>
                                </div>


                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <input type="submit" value="Send" />
                                </div>


                            </div>
                        </form>
                    </div>

                    <div className="contact info">
                        <h3>Contact Info</h3>
                        <div className="infoBox">
                            <div>
                                <span > <ImLocation2 /> </span>
                                <p>Room NO. 525, 4th Floor,District Administrative Complex , Sector 76.<br />SAS Nagar, Punjab.</p>
                            </div>
                            <div>
                                <span> <FaEnvelope /></span>
                                <p>redcrossmohali@yahoo.com</p>
                            </div>
                            <div>
                                <span > <BiPhone /></span>
                                <p>0172-2219526</p>
                            </div>

                            <ul className="sci">

                                <li>
                                    <a href="#" id="facebook" > <FaFacebookSquare /></a>
                                </li>
                                <li>
                                    <a href="#" id="twitter" > <FaTwitterSquare /> </a>
                                </li>
                                <li><a href="#" id="instagram" > <FaInstagramSquare /> </a>
                                </li>
                                <li> <a href="#" id="youtube" > <FaYoutubeSquare /> </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Map  */}
                    <div className="contact map">
                        <Map />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
