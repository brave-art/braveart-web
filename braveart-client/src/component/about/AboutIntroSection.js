import React from 'react';

import aboutImage from "../../img/about.jpg";

const AboutIntro = () => (

<section className="intro-section spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 intro-text">
                <h1>We are a creative Architecture<span>Studio</span></h1>
                <div className="row">
                    <div className="col-md-6">
                        <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque
                            sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada,
                            accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis
                            ligula. </p>
                    </div>
                    <div className="col-md-6">
                        <p>Curabitur finibus dolor vel lectus pretium interdum a eget ante. Morbi rhoncus feugiat
                            imperdiet. Curabitur non maximus leo. Nulla in ipsum sed magna egestas bibendum. Integer in
                            sem sagittis, commodo mi sit amet, commodo nibh. Suspendisse potenti. Aliquam erat
                            volutpat. </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 pt-4">
                <img src={aboutImage} alt="picture of team"/>
            </div>
        </div>
    </div>
</section>

);

export default AboutIntro;