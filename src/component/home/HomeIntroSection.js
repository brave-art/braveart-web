import React from 'react';
import intro from "../../img/intro.png";

const HomeIntroSection = () => (
    <section className="intro-section pt100 pb50">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 intro-text mb-5 mb-lg-0">
                    <h2 className="sp-title">We bring the <span>Adventure</span> to you</h2>
                    <p> TODO </p>
                    <a href="#" className="site-btn sb-dark">Book Axe Throwing</a>
                </div>
                <div className="col-lg-5 pt-4">
                    <img src={intro} alt="intro pic"/>
                </div>
            </div>
        </div>
    </section>
);

export default HomeIntroSection;