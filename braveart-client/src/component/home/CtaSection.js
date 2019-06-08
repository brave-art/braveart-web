import React from 'react';

// import lightIcon1 from "../../img/icon/light/1.png";
// import lightIcon2 from "../../img/icon/light/2.png";
// import lightIcon3 from "../../img/icon/light/3.png";

import crossedAxeIcon from "../../img/braveart/crossedLumberjackAxes/crossed-lumberjack-axes-icon-cut.png";
import puzzleIcon from "../../img/braveart/puzzle Icon/puzzle-icon-white.svg";

import bgImage from "../../img/braveart/adventure/Mountains_new_heights.jpg";


const CtaSection = () => (
    <section className="cta-section pt100 pb50">
        <div className="cta-image-box" style ={ { backgroundImage: "url("+bgImage+")" }}/>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
                    <h2 className="sp-title">Take your event or business to a new <span>height</span></h2>
                    <p> </p>
                    <div className="cta-icons">
                        <div className="cta-img-icon">
                            <img src={crossedAxeIcon} alt="icon for dare to dream"/>
                        </div>
                        <div className="cta-img-icon">
                            <img src={puzzleIcon} alt="icon for dare to dream"/>
                        </div>
                        {/*<div className="cta-img-icon">*/}
                        {/*    <img src={lightIcon3} alt="icon for dare to dream"/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default CtaSection;