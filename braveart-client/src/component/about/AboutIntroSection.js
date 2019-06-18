import React from 'react';

import aboutImage from "../../img/braveart/family/family_bike.jpg";
// import aboutImage from "../../img/about.jpg";

const AboutIntro = () => (

<section className="intro-section spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 intro-text">
                <h1 >We are <span>Family</span>.</h1>
                <h1>We love <span>Adventures</span>.</h1>
                <h1>We create <span>Experiences</span>.</h1>


                <div className="row">
                    <div className="col-md-6">
                        <p>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p> </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 pt-4">
                <img src={aboutImage} alt="Family before bike ride"/>
            </div>
        </div>
    </div>
</section>

);

export default AboutIntro;