import React from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from 'react-icons/fa';
// import "slick-carousel/slick/slick-theme.css";
import '../components-component/Campagin.css'

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://cdn.pixabay.com/photo/2022/04/25/06/22/feather-7155181__340.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"> <FaFacebookSquare /> </a></li>
                        <li><a href="#"> <FaInstagramSquare /> </a></li>
                        <li><a href="#"> <FaYoutubeSquare /> </a></li>
                        <li><a href="#"> <FaTwitterSquare /> </a></li>
                    </ul>
                    <div className="details">
                        <h2><a>donate now</a><span className="job-title"><a>For More...</a></span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://cdn.pixabay.com/photo/2022/04/25/06/22/feather-7155181__340.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"> <FaFacebookSquare /> </a></li>
                        <li><a href="#"> <FaInstagramSquare /> </a></li>
                        <li><a href="#"> <FaYoutubeSquare /> </a></li>
                        <li><a href="#"> <FaTwitterSquare /> </a></li>
                    </ul>
                    <div className="details">
                    <h2><a>donate now</a><span className="job-title"><a>For More...</a></span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://cdn.pixabay.com/photo/2022/04/25/06/22/feather-7155181__340.jpg" />
                    </div>
                    <ul className="social-icons">
                    <li><a href="#"> <FaFacebookSquare /> </a></li>
                        <li><a href="#"> <FaInstagramSquare /> </a></li>
                        <li><a href="#"> <FaYoutubeSquare /> </a></li>
                        <li><a href="#"> <FaTwitterSquare /> </a></li>
                    </ul>
                    <div className="details">
                    <h2><a>donate now</a><span className="job-title"><a>For More...</a></span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://cdn.pixabay.com/photo/2022/04/25/06/22/feather-7155181__340.jpg" />
                    </div>
                    <ul className="social-icons">
                    <li><a href="#"> <FaFacebookSquare /> </a></li>
                        <li><a href="#"> <FaInstagramSquare /> </a></li>
                        <li><a href="#"> <FaYoutubeSquare /> </a></li>
                        <li><a href="#"> <FaTwitterSquare /> </a></li>
                    </ul>
                    <div className="details">
                    <h2><a>donate now</a><span className="job-title"><a>For More...</a></span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider