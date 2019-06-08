import React from 'react';
import SocialLinks from "./SocialLinks";

const Footer = () => (
    <footer className="footer-section">
        <div className="footer-social">
            <SocialLinks/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-9 offset-lg-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-item">
                                <ul>
                                    <li><a href="#/">Home</a></li>
                                    <li><a href="#/about">About us</a></li>
                                    <li><a href="#/axe-throwing">Axe Throwing</a></li>
                                    <li><a href="#/contact">Contact</a></li>
                                    {/*<li><a href="#">Blog</a></li>*/}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-item">
                                <ul>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Help Desk</a></li>
                                    <li><a href="#">Job Aplications</a></li>
                                    <li><a href="#">Site Map</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-item">
                                <ul>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Newsletter</a></li>
                                    <li><a href="#">Clients Testimonials</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;